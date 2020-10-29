import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, Dimensions } from 'react-native';

/**
 * @file 导航栏
 */
interface Props {
    style?: StyleProp<ViewStyle> //容器样式
    leftStyle?: StyleProp<ViewStyle> //左边组件样式
    leftComponent?: React.ReactNode //左边组件
    centerStyle?: StyleProp<ViewStyle> //中间组件样式
    centerComponent?: React.ReactNode //中间组件
    rightStyle?: StyleProp<ViewStyle> //右边组件样式
    rightComponent?: React.ReactNode //右边组件
}

export const NavigationBar: React.FC<Props> = React.memo(({
    style,
    leftStyle,
    leftComponent,
    centerStyle,
    centerComponent,
    rightStyle,
    rightComponent,
}) => {
    return (
        <View style={[styles.container, style]} >
            <View style={[styles.left, { width: centerComponent === undefined ? '50%' : '33%' }, leftStyle]} >
                {leftComponent}
            </View>
            <View style={[styles.center, centerStyle]} >
                {centerComponent}
            </View>
            <View style={[styles.right, { width: centerComponent === undefined ? '50%' : '33%' }, rightStyle]} >
                {rightComponent}
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 44,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
    },
    left: {
        paddingLeft: 14,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    center: {
        width: '33%',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    right: {
        paddingRight: 14,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    }
})
