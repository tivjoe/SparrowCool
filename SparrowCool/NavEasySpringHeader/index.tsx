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
    useNativeDriver: boolean, // 是否启用原生驱动动画 如果次要导航栏没有点击事件建议启用，如果次要导航栏有点击事件请false
    onScrollY?: (valueY: number) => void // 当滑动时，执行的回调
}

export const NavEasySpringHeader: React.FC<Props> = React.memo((props) => {

    const [scrollY] = React.useState(new Animated.Value(0));

    React.useEffect(() => {

        if (props.onScrollY) {
            scrollY.removeAllListeners();
            scrollY.addListener(({ value }) => {
                if (props.onScrollY) {
                    props.onScrollY(value);
                }
            });
        }

        return () => {
            if (props.onScrollY) {
                scrollY.removeAllListeners();
            }
        }

    }, [])

    return (
        <View style={{ flex: 1 }} >
            <Animated.FlatList
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: props.useNativeDriver })}
                {...props.listOptions}
            />
            <AnimatedView componentView={props.dimensionHeader} animatedStyles={styleOpacityDimension(scrollY, props.onHeightStartShowMain, props.useNativeDriver)} />
            <AnimatedView componentView={props.mainHeader} animatedStyles={styleOpacityMain(scrollY, props.onHeightStartShowMain, props.onHeightFullShowMain, props.useNativeDriver)} />
        </View>

    )

});