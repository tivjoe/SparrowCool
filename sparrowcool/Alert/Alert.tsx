import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, StyleProp, ViewStyle, Text, TextStyle } from 'react-native';

/**
 * @file Alert纯展示组件
 * TODO: 添加动画
 */
export interface AlertComponentProps {
    cancelText?: string // 取消文本
    cancelTextStyle?: StyleProp<TextStyle> // 取消文本样式
    confirmText?: string // 确定文本样式
    confirmTextStyle?: StyleProp<TextStyle> // 确定文本样式
    backdropColor?: string // 背景幕布颜色
    alertContainerColor?: string // alert容器背景色
    alertContainerStyle?: StyleProp<ViewStyle> // alert容器样式
    titleStyle?: StyleProp<TextStyle> // 标题样式
    contentStyle?: StyleProp<TextStyle> // 内容样式
    rectangleBorderColor?: string // 边框颜色
}

interface Props extends AlertComponentProps {
    visible: boolean
    title: string
    onPressCancel: () => void
    onPressConfirm: () => void
    content?: string
}

export const AlertComponent: React.FC<Props> = React.memo(({
    visible,
    title,
    onPressCancel,
    onPressConfirm,
    content,
    cancelText = '取消',
    cancelTextStyle,
    confirmText = '确定',
    confirmTextStyle,
    backdropColor = 'rgba(0, 0, 0, 0.4)',
    alertContainerStyle,
    alertContainerColor = 'rgba(0, 0, 0, 0.6)',
    titleStyle,
    contentStyle,
    rectangleBorderColor = '#cccccc'
}) => {
    if (visible === false) {
        return null
    }
    return (
        <View style={[styles.container, { backgroundColor: backdropColor }]} >
            <View style={[styles.alertContainer, { backgroundColor: alertContainerColor }, alertContainerStyle]}>
                <Text style={[styles.title, { marginTop: 20, marginBottom: content === undefined ? 20 : 8, marginHorizontal: 14 }, titleStyle]} >{title}</Text>
                {content && <Text style={[styles.content, { marginBottom: 20, marginHorizontal: 14 }, contentStyle]}>{content}</Text>}
                <View style={[styles.rectangleContainer, { borderTopColor: rectangleBorderColor }]} >
                    <TouchableOpacity onPress={onPressCancel} activeOpacity={0.8} >
                        <View style={[styles.rectangle]} >
                            <Text style={[styles.title, cancelTextStyle]} >{cancelText}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPressConfirm} activeOpacity={0.8} >
                        <View style={[styles.rectangle, { borderLeftWidth: 0.5, borderLeftColor: rectangleBorderColor }]} >
                            <Text style={[styles.title, { color: '#3A85F6' }, confirmTextStyle]} >{confirmText}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alertContainer: {
        width: Dimensions.get('window').width * 0.7,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rectangleContainer: {
        height: 40,
        borderTopWidth: 0.5,
        flexDirection: 'row'
    },
    rectangle: {
        width: Dimensions.get('window').width * 0.7 / 2,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4
    },
    content: {
        fontSize: 14,
    }
})
