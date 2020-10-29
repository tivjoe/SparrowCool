import React from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

/**
 * @file 开关选择组件
 */
interface Props {
    value: boolean // 表示此开关是否打开。默认为 false（关闭状态）。
    onValueChange: () => void // 当值改变的时候调用此回调函数，参数为新的值。
    disabled?: boolean // 如果为true则禁用此组件的交互。
    onOpenBgColor?: string // 打开时的背景色
    onCloseBgColor?: string // 关闭时的背景色
    circleColor?: string // 圆的颜色
    scalingRatio?: number // 是否需要放大或者缩小
};

export const Switch: React.FC<Props> = React.memo(({
    value,
    onValueChange,
    disabled,
    onOpenBgColor = '#65C066',
    onCloseBgColor = '#dddddd',
    circleColor = 'white',
    scalingRatio = 1
}) => {
    const [transX] = React.useState(new Animated.Value(value === true ? 18 * scalingRatio : 0));

    React.useEffect(() => {
        Animated.spring(transX, {
            toValue: value === true ? 18 * scalingRatio : 0,
            speed: 15 * scalingRatio,
            bounciness: 12 * scalingRatio,
            restDisplacementThreshold: 10 * scalingRatio,
            restSpeedThreshold: 10 * scalingRatio,
            useNativeDriver: true,
        }).start()
    }, [value]);

    return (
        <TouchableWithoutFeedback disabled={disabled} onPress={onValueChange} >
            <View style={[
                styles.container,
                { width: 48 * scalingRatio, height: 27 * scalingRatio },
                { backgroundColor: value === true ? onOpenBgColor : onCloseBgColor }
            ]}>
                <Animated.View style={[
                    styles.circle,
                    { backgroundColor: circleColor },
                    { transform: [{ translateX: transX }], }]}
                />
            </View>
        </TouchableWithoutFeedback >
    );
});


const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        justifyContent: 'center',
        paddingHorizontal: 3
    },
    circle: {
        width: 25,
        height: 23,
        borderRadius: 25,
    }
});
