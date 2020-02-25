import React from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { AnimatedHeader } from './AnimatedHeader';
import AnimatedStyles from './AnimatedStyles';

/**
 * @file 吸顶导航栏，上拉隐藏导航栏/显示新的导航栏，下拉显示默认导航栏
 */
export interface Props {
    isMomentumScrollEnd: boolean;
    isMomentumScrollToBottom: boolean;
    currentGesture: string;
    scrollY: Animated.Value;
    scrollYValue: number;
    scrollBeginY: Animated.Value;
    scrollBeginYValue: number;
    defaultHeader: React.ReactNode;
    defaultHeaderHeight: number;
    onPullUpShowHeader?: React.ReactNode;
    onPullUpShowHeaderHeight?: number;
    alwayShowComponent?: React.ReactNode;
    isShowDefaultHeaderOnDown?: boolean;
    isShowDefaultHeaderOnDownMoveY?: number;
}

export const CrossHeader: React.FC<Props> = (props) => {

    const isShowHeader = () => {
        if
            (
            props.scrollYValue < props.defaultHeaderHeight // 顶部时
            ||
            (
                props.isShowDefaultHeaderOnDown === true
                &&
                (
                    (
                        // 不在顶部且上滑时
                        ((props.scrollYValue > props.defaultHeaderHeight + (props.onPullUpShowHeaderHeight === null ? props.onPullUpShowHeaderHeight : 0) && props.currentGesture === "onDown"))
                        &&
                        // 向上滑动超过600
                        (props.isMomentumScrollEnd === true && props.scrollYValue < props.scrollBeginYValue - (props.isShowDefaultHeaderOnDownMoveY === undefined ? 600 : props.isShowDefaultHeaderOnDownMoveY))
                    )
                    ||
                    props.isMomentumScrollToBottom === true //在底部时
                )
            )
        ) {
            return true; // show defaultHeader
        } else {
            return false; // show onPullUpShowHeader
        }
    }

    return (
        <View>
            {
                isShowHeader() === true
                    ?
                    <AnimatedHeader
                        componentHeader={props.defaultHeader}
                        animatedStyles={[
                            props.scrollYValue < props.defaultHeaderHeight === true ? AnimatedStyles("translateY_default", props.scrollY, props.defaultHeaderHeight, props.scrollBeginYValue, props.onPullUpShowHeaderHeight) : null]}
                    />
                    :
                    <AnimatedHeader
                        componentHeader={props.onPullUpShowHeader}
                        animatedStyles={[
                            AnimatedStyles("translateY_onPullUp", props.scrollY, props.defaultHeaderHeight, props.scrollBeginYValue, props.onPullUpShowHeaderHeight),
                        ]}
                    />
            }

            {props.alwayShowComponent}

            <Text>scrollY:{props.scrollYValue}</Text>
            <Text>scrollBeginY:{props.scrollBeginYValue}</Text>

        </View>
    )
}

const styles = StyleSheet.create({

});