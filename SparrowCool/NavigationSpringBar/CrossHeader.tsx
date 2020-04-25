import React from 'react';
import { Animated } from 'react-native';
import { AnimatedHeader } from './AnimatedHeader';
import { styleCrossHeaderBottom, styleDefaultOpacity, styleOnPullUpOpacity } from './AnimatedStyles';

/**
 * @file 吸顶导航栏，上拉隐藏导航栏/显示新的导航栏，下拉显示默认导航栏
 */
export interface Props {
    isShowHeader: Function,
    scrollY: Animated.Value;
    scrollYValue: number;
    scrollBeginY: Animated.Value;
    defaultHeader: React.ReactNode;
    defaultHeaderHeight: number;
    onPullUpShowHeader?: React.ReactNode;
    onPullUpShowHeaderHeight?: number;
    alwayShowComponent?: React.ReactNode;
    isShowDefaultHeaderOnDown?: boolean;
}

export const CrossHeader: React.FC<Props> = React.memo((props) => {

    return (
        <Animated.View
            style={[
                props.isShowHeader() === true && props.scrollYValue < props.defaultHeaderHeight
                    ?
                    styleCrossHeaderBottom(props.scrollY, props.defaultHeaderHeight)
                    :
                    null
            ]}
        >
            {
                props.isShowHeader() === true
                    ?
                    <AnimatedHeader
                        componentHeader={props.defaultHeader}
                        animatedStyles={[
                            props.scrollYValue < props.defaultHeaderHeight ? styleDefaultOpacity(props.scrollY, props.defaultHeaderHeight) : null
                        ]}
                    />
                    :
                    <AnimatedHeader
                        componentHeader={props.onPullUpShowHeader}
                        animatedStyles={[
                            styleOnPullUpOpacity(props.scrollY, props.defaultHeaderHeight, props.onPullUpShowHeaderHeight),
                        ]}
                    />
            }

            {props.alwayShowComponent}

        </Animated.View>
    )

});