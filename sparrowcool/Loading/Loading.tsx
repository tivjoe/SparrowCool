import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, ActivityIndicatorProps, StyleProp, ViewStyle } from 'react-native';

/**
 * @file loading纯展示组件
 * TODO: 添加动画效果
 */


export interface LoadingComponentProps {
    backdropColor?: string // 背景幕布颜色
    activityIndicatorConfig?: ActivityIndicatorProps // 加载颜色
    loadingContainerStyle?: StyleProp<ViewStyle>
    customLoading?: (visible: boolean, title: string | undefined) => React.ReactNode
}

interface Props extends LoadingComponentProps {
    visible: boolean // 是否显示
    title?: string // loading 文字
}

export const LoadingComponent: React.FC<Props> = React.memo(({
    visible = false,
    title,
    backdropColor = 'rgba(0, 0, 0, 0.4)',
    activityIndicatorConfig,
    loadingContainerStyle,
    customLoading
}) => {
    if (visible === false) {
        return null
    }
    return (
        <View style={[styles.container, { backgroundColor: backdropColor }]} >
            {
                customLoading === undefined
                    ? <View style={[styles.loadingContainer, loadingContainerStyle]}>
                        <ActivityIndicator animating={true} color='#d3d3d3' size='large' {...activityIndicatorConfig} />
                        {title !== undefined && < Text style={styles.text}>{title}</Text>}
                    </View>
                    : customLoading(visible, title)
            }
        </View >
    )
})

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingContainer: {
        paddingVertical: 14,
        paddingHorizontal: 14,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 4
    }
})
