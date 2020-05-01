import React from 'react';
import { Animated, StyleProp } from 'react-native';

/**
 * @file 动画view
 */
export interface Props {
    animatedStyles: StyleProp<AnimationEvent>,
    componentView: React.ReactNode,
};

export const AnimatedView: React.FC<Props> = React.memo((props) => {

    return (
        <Animated.View style={[{ position: 'absolute' }, props.animatedStyles]} >
            {props.componentView}
        </Animated.View>
    )

});