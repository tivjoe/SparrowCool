import { Animated } from 'react-native';

/**
 * @file 动画样式
 */
const animatedStyles = (styleName: string, scrollY: Animated.Value, defaultHeaderHeight: number, onPullUpShowHeaderHeight: number = 0) => {
    switch (styleName) {
        case "translateY_default":
            return {
                opacity: scrollY.interpolate({
                    inputRange: [0, defaultHeaderHeight],
                    outputRange: [1, 0.2]
                }),
                transform: [{
                    translateY: scrollY.interpolate({
                        inputRange: [0, defaultHeaderHeight],
                        outputRange: [0, 0 - defaultHeaderHeight],
                        extrapolate: 'clamp'
                    })
                }],
            }
        case "translateY_onPullUp":
            return {
                opacity: scrollY.interpolate({
                    inputRange: [defaultHeaderHeight, defaultHeaderHeight + defaultHeaderHeight / 2],
                    outputRange: [0.3, 1],
                    extrapolate: 'clamp'
                }),
                transform: [{
                    translateY: scrollY.interpolate({
                        inputRange: [defaultHeaderHeight, defaultHeaderHeight + defaultHeaderHeight / 2],
                        outputRange: [0 - onPullUpShowHeaderHeight, 0],
                        extrapolate: 'clamp'
                    })
                }],
            }
        default:
            return {}
    }
}

export default animatedStyles;
