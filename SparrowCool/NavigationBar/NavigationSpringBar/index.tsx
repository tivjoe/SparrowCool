import React from 'react';
import { Animated, StyleSheet, PanResponder, StyleProp, ViewStyle } from 'react-native';
import { CrossHeader } from './CrossHeader';

/**
 * @file 吸顶导航栏container，上拉隐藏导航栏/显示新的导航栏，下拉显示默认导航栏
 */
export interface Props {
    defaultHeader: React.ReactNode; // 默认显示的导航栏,下滑时显示的导航栏
    defaultHeaderHeight: number; // 默认显示导航栏的高度
    bodyContainer: React.ReactNode; // 主要内容
    style: StyleProp<ViewStyle>;
    alwayShowComponent?: React.ReactNode; // 一直显示的组件
    onPullUpShowHeader?: React.ReactNode; // 上滑时显示的导航栏
    onPullUpShowHeaderHeight?: number; // 上滑导航栏的高度
    isShowDefaultHeaderOnScrollToBottom?: boolean; // 滑动到底部时，是否显示默认导航栏 默认：true
    isShowDefaultHeaderOnDown?: boolean; // 下滑时是否显示默认导航栏 默认：true
    isShowDefaultHeaderOnDownMoveY?: number; // 下滑多少距离时显示defaultHeader，默认值：600
}

export const NavigationSpringBar: React.FC<Props> = (props) => {

    const [scrollY] = React.useState(new Animated.Value(0));
    const [scrollYValue, setScrollYValue] = React.useState(-1);

    const [scrollBeginY] = React.useState(new Animated.Value(0));
    const [scrollBeginYValue, setScrollBeginYValue] = React.useState(-1);

    const [panY] = React.useState(new Animated.Value(0));
    const [currentGesture, setCurrentGesture] = React.useState("onDown");
    const [isMomentumScrollEnd, setIsMomentumScrollEnd] = React.useState(false);
    const [isMomentumScrollToBottom, setIsMomentumScrollToBottom] = React.useState(false);

    const refAnimatedScrollView = React.useRef<any>(null); // TO_DO : 找到相应类型替换any, 这是react-native bug

    React.useEffect(() => {

        scrollY.removeAllListeners();
        scrollY.addListener(({ value }) => setScrollYValue(value));

        panY.removeAllListeners();
        panY.addListener(({ value }) => setCurrentGesture(value > 0 ? "onDown" : "onUp"))

        scrollBeginY.removeAllListeners();
        scrollBeginY.addListener(({ value }) => setScrollBeginYValue(value))

        return () => {
            scrollY.removeAllListeners();
            panY.removeAllListeners();
            scrollBeginY.removeAllListeners();
        }
    }, [scrollYValue === -1, scrollBeginYValue === -1, currentGesture, isMomentumScrollEnd, isMomentumScrollToBottom]) //保证只存在一个监听

    // ScrollView滑动到顶部
    const scrollToTop = () => {
        if (refAnimatedScrollView.current !== null) {
            refAnimatedScrollView.current.getNode().scrollTo({ x: 0, y: 0, animated: true }); // TO_DO : getNode() 得去掉,但是去掉了就报错，react-native bug
        }
    }

    // 当滑动到底部时
    const onMomentumScrollEndToBottom = (offsetY: number, origanScrollHeight: number, contentSizeHeight: number) => {
        if (props.isShowDefaultHeaderOnScrollToBottom === true) {
            offsetY + origanScrollHeight >= contentSizeHeight ? setIsMomentumScrollToBottom(true) : setIsMomentumScrollToBottom(false);
        }
    }

    // 当滑动没有超过指定距离时
    const onMomentumScrollEndIsExceedDistance = () => {
        scrollYValue < props.defaultHeaderHeight + (props.onPullUpShowHeaderHeight === undefined ? 0 : props.onPullUpShowHeaderHeight) ? scrollToTop() : null;
    }

    // 手势
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => setIsMomentumScrollEnd(false),
        onPanResponderMove: Animated.event([null, { dy: panY }])
    })

    // 判断显示哪个header
    const isShowHeader = () => {
        if
            (
            scrollYValue < props.defaultHeaderHeight // 顶部时
            ||
            (
                props.isShowDefaultHeaderOnDown === true
                &&
                (
                    (
                        // 不在顶部且上滑时
                        ((scrollYValue > props.defaultHeaderHeight + (props.onPullUpShowHeaderHeight === null ? props.onPullUpShowHeaderHeight : 0) && currentGesture === "onDown"))
                        &&
                        (
                            //滑动距离在大于600时
                            scrollYValue > 600
                            &&
                            // 向上滑动超过600
                            (isMomentumScrollEnd === true && scrollYValue < scrollBeginYValue - (props.isShowDefaultHeaderOnDownMoveY === undefined ? 600 : props.isShowDefaultHeaderOnDownMoveY))
                        )
                    )
                    ||
                    isMomentumScrollToBottom === true //在底部时
                )
            )
        ) {
            return true; // show defaultHeader
        } else {
            return false; // show onPullUpShowHeader
        }
    }

    return (
        <Animated.ScrollView
            {...panResponder.panHandlers}
            ref={refAnimatedScrollView}
            stickyHeaderIndices={[0]}
            style={[styles.container, props.style]}
            scrollEventThrottle={1}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
            onScrollBeginDrag={Animated.event([{ nativeEvent: { contentOffset: { y: scrollBeginY } } }])}
            onMomentumScrollEnd={(e: { nativeEvent: { contentOffset: { y: number }, contentSize: { height: number }, layoutMeasurement: { height: number } } }) => {
                setIsMomentumScrollEnd(true);
                onMomentumScrollEndToBottom(e.nativeEvent.contentOffset.y, e.nativeEvent.layoutMeasurement.height, e.nativeEvent.contentSize.height);
                onMomentumScrollEndIsExceedDistance();
            }}
        >
            <CrossHeader
                isShowHeader={() => isShowHeader()}
                scrollY={scrollY}
                scrollYValue={scrollYValue}
                scrollBeginY={scrollBeginY}
                defaultHeader={props.defaultHeader}
                defaultHeaderHeight={props.defaultHeaderHeight}
                onPullUpShowHeader={props.onPullUpShowHeader}
                onPullUpShowHeaderHeight={props.onPullUpShowHeaderHeight}
                alwayShowComponent={props.alwayShowComponent}
                isShowDefaultHeaderOnDown={props.isShowDefaultHeaderOnDown}
            />
            {props.bodyContainer}
        </Animated.ScrollView>
    );
};

NavigationSpringBar.defaultProps = {
    onPullUpShowHeaderHeight: 0,
    isShowDefaultHeaderOnScrollToBottom: true,
    isShowDefaultHeaderOnDown: true,
    isShowDefaultHeaderOnDownMoveY: 600
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dedede"
    }
});