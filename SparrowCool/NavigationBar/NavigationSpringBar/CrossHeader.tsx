import React from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

/**
 * @file 吸顶导航栏，上拉隐藏导航栏/显示新的导航栏，下拉显示默认导航栏
 */
export interface Props {
    scrollY: Animated.Value;
    scrollYValue: number; //scrollViewY轴滑动距离
    defaultHeader: React.ReactNode; // 默认显示的导航栏,下滑时显示的导航栏
    defaultHeaderHeight: number; // 默认显示导航栏的高度
    onPullUpShowHeader?: React.ReactNode; // 上滑时显示的导航栏，默认为隐藏
}

export const CrossHeader: React.FC<Props> = (props) => {
    return (
        <Animated.View style={{
            opacity: props.scrollY.interpolate({
                inputRange: [0, props.defaultHeaderHeight * 2],
                outputRange: [1, 0]
            }),
            height:props.scrollY.interpolate({
                inputRange:[0,props.defaultHeaderHeight*2],
                outputRange:[props.defaultHeaderHeight,0]
            })
        }} >
            {props.defaultHeader}
        </Animated.View>
    )
}

const styles = StyleSheet.create({

});