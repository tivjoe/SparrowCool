import React from 'react';
import { View, Animated, ViewStyle } from 'react-native';

// 目录下
import { AnimatedNavbar, AnimationFade } from './AnimatedNavbar';

/**
 * @file 滑动切换导航栏
 */
interface Props {
    type: 'ScrollView' | 'FlatList' | 'SectionList'
    mainNavbar: React.ReactNode // 主要的导航栏
    onHeightStartShowMain: number // 当滑动到多少距离时开始显示主要的导航栏
    onHeightFullShowMain: number // 当滑动到多少距离时完全显示主要的导航栏
    listOptions: any // List的props
    useNativeDriver: boolean // 是否启用原生驱动动画 如果次要导航栏没有点击事件建议启用，如果次要导航栏有点击事件请false
    dimensionNavbar?: React.ReactNode // 次要的导航栏
    onScrollY?: (valueY: number) => void // 当滑动时，执行的回调
    customAnimationMain?: (scrollY: Animated.Value) => Animated.WithAnimatedObject<ViewStyle> // 自定义主要导航栏动画
    customAnimationDimension?: (scrollY: Animated.Value) => Animated.WithAnimatedObject<ViewStyle> // 自定义次要导航栏动画
}

export const ScrollVaryNavbar: React.FC<Props> = React.memo(({
    type,
    mainNavbar,
    onHeightStartShowMain,
    onHeightFullShowMain,
    listOptions,
    dimensionNavbar,
    useNativeDriver,
    onScrollY,
    customAnimationMain,
    customAnimationDimension,
}) => {
    const [scrollY] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
        if (onScrollY) {
            scrollY.removeAllListeners();
            scrollY.addListener(({ value }) => {
                if (onScrollY) {
                    onScrollY(value);
                }
            });
        }
        return () => {
            if (onScrollY) {
                scrollY.removeAllListeners();
            }
        }
    }, [])

    return (
        <View style={{ flex: 1 }} >
            {
                type === 'ScrollView' && <Animated.ScrollView
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: useNativeDriver })}
                    {...listOptions}
                />
            }
            {
                type === 'FlatList' && <Animated.FlatList
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: useNativeDriver })}
                    {...listOptions}
                />
            }
            {
                type === 'SectionList' && <Animated.SectionList
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: useNativeDriver })}
                    {...listOptions}
                />
            }
            <AnimatedNavbar
                navbar={dimensionNavbar}
                animatedStyles={
                    customAnimationDimension === undefined
                        ? React.useMemo(() => AnimationFade.dimension(scrollY, onHeightStartShowMain, useNativeDriver), [scrollY])
                        : React.useMemo(() => customAnimationDimension(scrollY), [scrollY])
                }
            />
            <AnimatedNavbar
                navbar={mainNavbar}
                animatedStyles={
                    customAnimationMain === undefined
                        ? React.useMemo(() => AnimationFade.main(scrollY, onHeightStartShowMain, onHeightFullShowMain, useNativeDriver), [scrollY])
                        : React.useMemo(() => customAnimationMain(scrollY), [scrollY])
                }
            />
        </View>
    )
})
