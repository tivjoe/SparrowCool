import { Animated } from 'react-native';

/**
 * @file 动画样式
 */

// ScrollView,marginTo变化
export const styleCrossHeaderBottom = (scrollY: Animated.Value, defaultHeaderHeight: number) => {
    return {
        translateY: scrollY.interpolate({
            inputRange: [0, defaultHeaderHeight],
            outputRange: [0, 0 - defaultHeaderHeight],
            extrapolate: 'clamp',
        }),
    }
}

// 下滑时导航栏，上下移+透明
export const styleDefaultOpacity = (scrollY: Animated.Value, defaultHeaderHeight: number) => {
    return {
        opacity: scrollY.interpolate({
            inputRange: [0, defaultHeaderHeight],
            outputRange: [1, 0],
        }),
        // transform: [{
        //     translateY: scrollY.interpolate({
        //         inputRange: [0, defaultHeaderHeight],
        //         outputRange: [0, 0 - defaultHeaderHeight],
        //         extrapolate: 'clamp'
        //     })
        // }],
    }
}

// 上滑时导航栏，上下移+透明
export const styleOnPullUpOpacity = (scrollY: Animated.Value, defaultHeaderHeight: number, onPullUpShowHeaderHeight: number = 0) => {
    return {
        opacity: scrollY.interpolate({
            inputRange: [defaultHeaderHeight, defaultHeaderHeight + defaultHeaderHeight / 2],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        }),
        // transform: [{
        //     translateY: scrollY.interpolate({
        //         inputRange: [defaultHeaderHeight, defaultHeaderHeight + defaultHeaderHeight / 2],
        //         outputRange: [0 - onPullUpShowHeaderHeight, 0],
        //         extrapolate: 'clamp'
        //     })
        // }],
    }
}
