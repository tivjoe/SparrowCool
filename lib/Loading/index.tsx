import React from 'react';

// 目录下
import { LoadingContainer } from './Container';
import { LoadingComponentProps } from './Loading';

/**
 * @file 全局loading
 */
const LoadingController: React.FC<LoadingComponentProps> = React.memo((props) => {
    const loadingRef = React.useRef<LoadingContainer>(null);

    React.useEffect(() => {
        if (loadingRef.current) {
            utilLoading.showLoading = loadingRef.current.showLoading;
            utilLoading.closeLoading = loadingRef.current.closeLoading;
            utilLoading.autoLoading = loadingRef.current.autoLoading;
        }
    }, [loadingRef])

    return <LoadingContainer ref={loadingRef} {...props} />
})

export const utilLoading = {
    Loading: LoadingController, // 全局唯一loading组件
    showLoading: (title?: string) => { }, // 显示loading
    closeLoading: () => { }, // 关闭loading
    autoLoading: async (func: () => any, title?: string) => { } // 自动控制loading
}
