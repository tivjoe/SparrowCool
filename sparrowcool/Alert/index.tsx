import React from 'react';

// 目录下
import { AlertComponentProps } from './Alert';
import { AlertContainer } from './Container';

/**
 * @file 全局Alert
 */
const AlertController: React.FC<AlertComponentProps> = React.memo((props) => {
    const alertRef = React.useRef<AlertContainer>(null);

    React.useEffect(() => {
        if (alertRef.current) {
            utilAlert.showAlert = alertRef.current.showAlert;
            utilAlert.closeAlert = alertRef.current.closeAlert;
        }
    }, [alertRef])

    return <AlertContainer ref={alertRef} {...props} />
})

export const utilAlert = {
    Alert: AlertController,
    showAlert: (title: string, confirm: () => any, content?: string) => { },
    closeAlert: () => { },
}
