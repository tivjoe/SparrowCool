import React from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { AnimatedHeader } from './AnimatedHeader';
import AnimatedStyles from './AnimatedStyles';

/**
 * @file 吸顶导航栏，上拉隐藏导航栏/显示新的导航栏，下拉显示默认导航栏
 */
export interface Props {
    scrollY: Animated.Value;
    scrollYValue: number;
    defaultHeader: React.ReactNode;
    defaultHeaderHeight: number;
    onPullUpShowHeader?: React.ReactNode;
    onPullUpShowHeaderHeight?: number;
    alwayShowComponent?: React.ReactNode;
}

export const CrossHeader: React.FC<Props> = (props) => {

    return (
        <View>
            {
                props.scrollYValue <= props.defaultHeaderHeight
                    ?
                    <AnimatedHeader
                        componentHeader={props.defaultHeader}
                        animatedStyles={[AnimatedStyles("translateY_default", props.scrollY, props.defaultHeaderHeight, props.onPullUpShowHeaderHeight)]}
                    />
                    :
                    <AnimatedHeader
                        componentHeader={props.onPullUpShowHeader}
                        animatedStyles={[AnimatedStyles("translateY_onPullUp", props.scrollY, props.defaultHeaderHeight, props.onPullUpShowHeaderHeight)]}
                    />
            }

            {props.alwayShowComponent}

            <Text>scrollY:{props.scrollYValue}</Text>

        </View>
    )
}

const styles = StyleSheet.create({

});