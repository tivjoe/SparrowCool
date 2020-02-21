import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { CrossHeader } from './CrossHeader';

/**
 * @file 吸顶导航栏，上拉隐藏导航栏/显示新的导航栏，下拉显示默认导航栏
 */
export interface Props {
    defaultHeader: React.ReactNode; // 默认显示的导航栏,下滑时显示的导航栏
    defaultHeaderHeight: number; // 默认显示导航栏的高度
    onPullUpShowHeader?: React.ReactNode; // 上滑时显示的导航栏，默认为隐藏
    alwayShowComponent?: React.ReactNode; // 一直显示的组件
    bodyContainer: React.ReactNode; // 主要内容
}

export const NavigationSpringBar: React.FC<Props> = (props) => {

    const [scrollY] = React.useState(new Animated.Value(0));
    const [scrollYValue, setScrollYValue] = React.useState(-1);

    React.useEffect(() => {
        scrollY.removeAllListeners();
        scrollY.addListener(({ value }) => setScrollYValue(value));
        return () => {
            scrollY.removeAllListeners();
        }
    }, [scrollYValue === -1]) //保证只存在一个监听

    return (
        <View style={[styles.container]}>

            <CrossHeader
                scrollY={scrollY}
                scrollYValue={scrollYValue}
                defaultHeader={props.defaultHeader}
                defaultHeaderHeight={props.defaultHeaderHeight}
                onPullUpShowHeader={props.onPullUpShowHeader}
            />
            {props.alwayShowComponent}

            <Animated.ScrollView
                style={[styles.container]}
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
            >
                {props.bodyContainer}
            </Animated.ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});