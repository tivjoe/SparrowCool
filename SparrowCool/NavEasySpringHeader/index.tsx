import React from 'react';
import { Animated, View } from 'react-native';

import { styleOpacityDimension, styleOpacityMain } from './AnimatedStyles';
import { AnimatedView } from './AnimatedView';

/**
 * @file 简单版吸顶导航栏
 */
interface Props {
    mainHeader: React.ReactNode, // 主要的header
    onHeightStartShowMain: number, // 当滑动到多少距离时开始显示主要的header
    onHeightFullShowMain: number, // 当滑动到多少距离时完全显示主要的header
    listOptions: any, // FlatList 的props
    dimensionHeader?: React.ReactNode, // 次要的header
}

export const NavEasySpringHeader: React.FC<Props> = React.memo((props) => {

    const [scrollY] = React.useState(new Animated.Value(0));

    return (
        <View style={{ flex: 1 }} >
            <Animated.FlatList
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                // onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })} // 最方便的，禁用视觉上没有显示的点击事件，正在寻找更好的方案
                {...props.listOptions}
            />
            <AnimatedView componentView={props.dimensionHeader} animatedStyles={styleOpacityDimension(scrollY, props.onHeightStartShowMain)} />
            <AnimatedView componentView={props.mainHeader} animatedStyles={styleOpacityMain(scrollY, props.onHeightStartShowMain, props.onHeightFullShowMain)} />
        </View>

    )

});