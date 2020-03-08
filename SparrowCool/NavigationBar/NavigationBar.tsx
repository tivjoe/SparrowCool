import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, } from 'react-native';

/**
 * @file 自定义导航栏
 */
export interface Props {
    style?: StyleProp<ViewStyle>, //容器样式
    leftStyle?: StyleProp<ViewStyle>, //左边组件样式
    leftComponent?: React.ReactNode, //左边组件
    centerStyle?: StyleProp<ViewStyle>, //中间组件样式
    centerComponent?: React.ReactNode, //中间组件
    rightStyle?: StyleProp<ViewStyle>, //右边组件样式
    rightComponent?: React.ReactNode, //右边组件
};

export const NavigationBar: React.FC<Props> = (props) => {
    return (
        <View style={[styles.container, props.style]} >

            <View style={[styles.left, props.leftStyle]} >
                {props.leftComponent}
            </View>

            <View style={[styles.center, props.centerStyle]} >
                {props.centerComponent}
            </View>

            <View style={[styles.right, props.rightStyle]} >
                {props.rightComponent}
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 44,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
    },
    left: {
        paddingLeft: 14,
        width: "33%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    center: {
        width: "33%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    right: {
        paddingRight: 14,
        width: "33%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    }
});