import React from 'react';
import { Animated, View, StyleSheet, ScrollView } from 'react-native';
import { CrossHeader } from './CrossHeader';

/**
 * @file 吸顶导航栏，上拉隐藏导航栏/显示新的导航栏，下拉显示默认导航栏
 */
export interface Props {
    defaultHeader: React.ReactNode; // 默认显示的导航栏,下滑时显示的导航栏
    defaultHeaderHeight: number; // 默认显示导航栏的高度
    onPullUpShowHeader?: React.ReactNode; // 上滑时显示的导航栏
    onPullUpShowHeaderHeight?: number; // 上滑时显示的导航栏的高度
    alwayShowComponent?: React.ReactNode; // 一直显示的组件
    bodyContainer: React.ReactNode; // 主要内容
}

export const NavigationSpringBar: React.FC<Props> = (props) => {

    const [scrollY] = React.useState(new Animated.Value(0));
    const [scrollYValue, setScrollYValue] = React.useState(-1);
    const refAnimatedScrollView = React.useRef<any>(null); // TO_DO : 找到相应类型替换any, 这是react-native的bug

    React.useEffect(() => {
        scrollY.removeAllListeners();
        scrollY.addListener(({ value }) => setScrollYValue(value));
        return () => {
            scrollY.removeAllListeners();
        }
    }, [scrollYValue === -1]) //保证只存在一个监听

    const scrollToTop = () => {
        if (refAnimatedScrollView.current !== null) {
            refAnimatedScrollView.current.getNode().scrollTo({ x: 0, y: 0, animated: true });
        }
    }

    return (
        <Animated.ScrollView
            stickyHeaderIndices={[0]}
            ref={refAnimatedScrollView}
            style={[styles.container]}
            scrollEventThrottle={1}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
            onScrollEndDrag={() => { scrollYValue < props.defaultHeaderHeight + (props.onPullUpShowHeaderHeight === undefined ? 0 : props.onPullUpShowHeaderHeight) ? scrollToTop() : null }}
        >

            <CrossHeader
                scrollY={scrollY}
                scrollYValue={scrollYValue}
                defaultHeader={props.defaultHeader}
                defaultHeaderHeight={props.defaultHeaderHeight}
                onPullUpShowHeader={props.onPullUpShowHeader}
                onPullUpShowHeaderHeight={props.onPullUpShowHeaderHeight}
                alwayShowComponent={props.alwayShowComponent}
            />

            {props.bodyContainer}

        </Animated.ScrollView>
    );
};

NavigationSpringBar.defaultProps = {
    onPullUpShowHeaderHeight: 0
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});