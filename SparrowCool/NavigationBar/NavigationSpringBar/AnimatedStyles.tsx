import { Animated } from 'react-native';

/**
 * @file 动画样式
 */
const animatedStyles = (styleName: string, scrollY: Animated.Value, defaultHeaderHeight: number, scrollBeginYValue: number, onPullUpShowHeaderHeight?: number) => {
    switch (styleName) {
        case "translateY_default":
            return {
                opacity: scrollY.interpolate({
                    inputRange: [0, defaultHeaderHeight],
                    outputRange: [1, 0.3]
                }),
                transform: [{
                    translateY: scrollY.interpolate({
                        inputRange: [0, defaultHeaderHeight],
                        outputRange: [0, 0 - defaultHeaderHeight],
                        extrapolate: 'clamp'
                    })
                }],
            }
        // case "fade_default_down":
        //     return {
        //         opacity: scrollY.interpolate({
        //             inputRange: [scrollBeginYValue - 200, scrollBeginYValue - 200 - defaultHeaderHeight],
        //             outputRange: [1, 0.3]
        //         }),
        //     }
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
                        outputRange: [0 - (onPullUpShowHeaderHeight === undefined ? 0 : onPullUpShowHeaderHeight), 0],
                        extrapolate: 'clamp'
                    })
                }],
            }
        default:
            return {}
    }
}

export default animatedStyles;
