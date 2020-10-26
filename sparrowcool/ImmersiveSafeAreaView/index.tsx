import React from 'react';
import { View, Platform, StyleSheet, StyleProp, ViewStyle, Dimensions, StatusBar } from 'react-native';

// 公用
import { ImmersiveStatusBar } from '../ImmersiveStatusBar';

/**
 * @file 适配android/ios 刘海屏/异型屏，并实现异型屏幕
 * 嵌套在内部的组件都会从状态栏的顶部开始绘制
 */
interface Props {
    isComplexImmersive?: boolean // 是否是复杂的沉浸式；默认为false，嵌套在内部的组件会被“paddingTop：状态栏高度”属性约束，然后将style的背景色改变为导航栏的背景色即可实现沉浸式；如果状态栏非纯色，例如渐变色，图片,视频等也需要沉浸式，则设置为true
    isSmallView?: boolean // 嵌套在内部的组件是否只是一个小组件 例如：导航栏
    statusContentMode?: 'dark-content' | 'light-content' // 状态栏文本颜色
    customizedStatusBar?: boolean // 已经自定义了状态栏
    safeBottom?: boolean
    style?: StyleProp<ViewStyle>
    safeBottomColor?: string
};

export const ImmersiveSafeAreaView: React.FC<Props> = React.memo(({
    isComplexImmersive = false,
    isSmallView = false,
    statusContentMode = 'dark-content',
    customizedStatusBar = false,
    style,
    safeBottom = false,
    safeBottomColor = 'white',
    children
}) => {
    const getStyle = () => {
        if (isSmallView === true) {
            return Platform.OS === 'ios' ? styles.safeTopIos : styles.safeTopAndroid;
        } else {
            if (isComplexImmersive === true) {
                return styles.container
            } else {
                return Platform.OS === 'ios' ? styles.safeTopIos : styles.safeTopAndroid;
            }
        }
    };

    return (
        <View style={[getStyle(), style]} >
            {(isSmallView === false && customizedStatusBar === false) && <ImmersiveStatusBar barStyle={statusContentMode} />}
            {children}
            {safeBottom === true && <View style={[styles.safeBottom, { backgroundColor: safeBottomColor }]} />}
        </View>
    );
});

/** 判断是否是iPhoneX */
const isIPhoneX = (): boolean => {
    // iPhoneX Xs
    const X_WIDTH = 375;
    const X_HEIGHT = 812;
    // iPhoneXR XsMax
    const XR_WIDTH = 414;
    const XR_HEIGHT = 896;

    return Platform.OS == 'ios' && (
        (Dimensions.get('window').height == X_HEIGHT && Dimensions.get('window').width == X_WIDTH) ||
        (Dimensions.get('window').height == XR_HEIGHT && Dimensions.get('window').width == XR_WIDTH)
    )
};

/** ios状态栏高度 */
const statusBarIosHeight = isIPhoneX() === true ? 44 : 20;

/** android 状态栏高度 */
const statusBarAndroidHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    safeTopIos: {
        flex: 1,
        paddingTop: statusBarIosHeight
    },
    safeTopAndroid: {
        flex: 1,
        paddingTop: statusBarAndroidHeight
    },
    safeBottom: {
        width: Dimensions.get('window').width,
        height: isIPhoneX() === true ? 34 : 0,
    }
});
