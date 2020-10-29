import React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';

/**
 * @file 沉浸式状态栏
 */
interface Props {
    barStyle?: "dark-content" | "light-content" | "default" | undefined
    config?: StatusBarProps
}

export const ImmersiveStatusBar: React.FC<Props> = React.memo(({
    barStyle = 'dark-content',
    config
}) => {
    return (
        <StatusBar
            barStyle={barStyle}
            backgroundColor='transparent'
            translucent={true}
            {...config}
        />
    )
})
