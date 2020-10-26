import React from 'react';

// 目录下
import { LoadingComponent, LoadingComponentProps } from './Loading';

/**
 * @file
 * loading组件的容器，定义控制方法
 */
interface Props extends LoadingComponentProps { }

interface State {
    visible: boolean,
    title: string | undefined
}

export class LoadingContainer extends React.PureComponent<Props, State> {
    state = {
        visible: false,
        title: undefined
    }

    showLoading = (title?: string) => {
        this.setState({ visible: true, title: title })
    }

    closeLoading = () => {
        this.setState({ visible: false })
    }

    autoLoading = async (func: () => any, title?: string) => {
        this.showLoading(title);
        await func();
        this.closeLoading();
    }

    render() {
        return <LoadingComponent
            visible={this.state.visible}
            title={this.state.title}
            {...this.props}
        />
    }
}
