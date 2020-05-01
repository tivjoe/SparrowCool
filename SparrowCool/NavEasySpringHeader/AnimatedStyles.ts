import { Animated } from 'react-native';

/**
 * @file 动画样式
 */

// 主导航栏动画
export const styleOpacityMain = (scrollY: Animated.Value, onHeightStartShow: number, onHeightFullShowMain: number) => {
    return {
        opacity: scrollY.interpolate({
            inputRange: [onHeightStartShow, onHeightFullShowMain],
            outputRange: [0, 1],
        }),
    }
}

// 副导航栏动画
export const styleOpacityDimension = (scrollY: Animated.Value, onHeightStartShow: number) => {
    return {
        opacity: scrollY.interpolate({
            inputRange: [onHeightStartShow, onHeightStartShow + 10],
            outputRange: [1, 0],
        }),
    }
}