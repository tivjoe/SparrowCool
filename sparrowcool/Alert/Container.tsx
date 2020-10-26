import React from 'react';

// 目录下
import { AlertComponent, AlertComponentProps } from './Alert';

/**
 * @file
 * Alert的容器，定义控制方法
 */
interface Props extends AlertComponentProps { }

interface State {
    visible: boolean
    title: string
    content: string | undefined
}

export class AlertContainer extends React.PureComponent<Props, State> {
    state = {
        visible: false,
        title: '',
        content: undefined
    }

    confirm = () => { }

    showAlert = (title: string, confirm: () => any, content?: string) => {
        this.confirm = confirm;
        this.setState({ visible: true, title: title, content: content })
    }

    closeAlert = () => {
        this.setState({ visible: false })
    }

    render() {
        return <AlertComponent
            visible={this.state.visible}
            title={this.state.title}
            onPressCancel={this.closeAlert}
            onPressConfirm={this.confirm}
            content={this.state.content}
            {...this.props}
        />
    }
}
