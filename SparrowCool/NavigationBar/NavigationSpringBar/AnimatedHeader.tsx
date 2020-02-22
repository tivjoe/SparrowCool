import React from 'react';
import { Animated, StyleSheet, StyleProp } from 'react-native';

/**
 * @file 自定义动画导航栏
 */
export interface Props {
    animatedStyles: StyleProp<AnimationEvent>;
    componentHeader: React.ReactNode;
}

export const AnimatedHeader: React.FC<Props> = (props) => {
    return (
        < Animated.View style={[props.animatedStyles]} >
            {props.componentHeader}
        </Animated.View>
    )
}

const styles = StyleSheet.create({

});