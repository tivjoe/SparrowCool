import React from 'react';
import { Animated, ViewStyle } from 'react-native';

/**
 * @file 动画导航栏
 */
interface Props {
    animatedStyles: Animated.WithAnimatedObject<ViewStyle>
    navbar: React.ReactNode,
};

export const AnimatedNavbar: React.FC<Props> = React.memo(({
    animatedStyles,
    navbar
}) => {
    return (
        <Animated.View style={[{ position: 'absolute' }, animatedStyles]} >
            {navbar}
        </Animated.View>
    )
});

// 主导航栏动画
const styleFadeMain = (
    scrollY: Animated.Value,
    onHeightStartShow: number,
    onHeightFullShowMain: number,
    useNativeDriver: boolean
): Animated.WithAnimatedObject<ViewStyle> => {
    return {
        opacity: scrollY.interpolate({
            inputRange: [onHeightStartShow, onHeightFullShowMain],
            outputRange: [0, 1],
        }),
        zIndex: useNativeDriver === true
            ? undefined
            : scrollY.interpolate({
                inputRange: [onHeightStartShow, onHeightFullShowMain],
                outputRange: [1, 10],
            }),
    }
}

// 副导航栏动画
const styleFadeDimension = (
    scrollY: Animated.Value,
    onHeightStartShow: number,
    useNativeDriver: boolean
): Animated.WithAnimatedObject<ViewStyle> => {
    return {
        opacity: scrollY.interpolate({
            inputRange: [onHeightStartShow, onHeightStartShow + 10],
            outputRange: [1, 0],
        }),
        zIndex: useNativeDriver === true
            ? undefined
            : scrollY.interpolate({
                inputRange: [onHeightStartShow, onHeightStartShow + 10],
                outputRange: [10, 1],
            }),
    }
}

export const AnimationFade = {
    main: styleFadeMain,
    dimension: styleFadeDimension,
}
