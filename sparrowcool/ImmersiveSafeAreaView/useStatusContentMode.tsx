import React from 'react';

// 目录下
import { ContentModeType } from './type';

/**
 * @file
 * hook: 可动态控制状态栏文本颜色的改变
 */
export const useStatusContentMode = (
    mode: ContentModeType
) => {
    const [statusContentMode, setStatusContentMode] = React.useState<ContentModeType>(mode);

    /**
     * 通过滚动来控制变化
     * @param {number} scrollYValue
     * @param {number} onChangeNumber 
     */
    const controlForScrollY = (scrollYValue: number, onChangeNumber: number, changeMode: ContentModeType) => {
        setStatusContentMode(scrollYValue < onChangeNumber ? mode : changeMode);
    };

    return {
        statusContentMode,
        setStatusContentMode,
        controlForScrollY
    };
};
