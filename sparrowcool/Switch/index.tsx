import React from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

/**
 * @file 开关选择组件
 */
interface Props {
    value: boolean
    onValueChange: () => void
    disabled?: boolean
};

export const Switch: React.FC<Props> = React.memo(({ value, onValueChange, disabled }) => {

    const [transX] = React.useState(new Animated.Value(value === true ? 18 : 0));

    React.useEffect(() => {
        Animated.spring(transX, {
            toValue: value === true ? 18 : 0,
            speed: 15,
            bounciness: 12,
            restDisplacementThreshold: 10,
            restSpeedThreshold: 10,
            useNativeDriver: true,
        }).start()
    }, [value]);

    return (
        <TouchableWithoutFeedback disabled={disabled} onPress={onValueChange} >
            <View style={[styles.container, value === true ? styles.onOpenContainer : styles.onCloseContainer]}>
                <Animated.View style={[styles.circle, { transform: [{ translateX: transX }], }]} />
            </View>
        </TouchableWithoutFeedback>
    );

});


const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 27,
        borderRadius: 25,
        justifyContent: 'center',
        paddingHorizontal: 3
    },
    onOpenContainer: {
        backgroundColor: '#65C066'
    },
    onCloseContainer: {
        backgroundColor: '#dddddd'
    },
    circle: {
        width: 25,
        height: 23,
        borderRadius: 25,
        backgroundColor: 'white'
    }
});
