# Alert

全局弹出Alert，同时只能存在一个Alert

## 使用

1. 只需要在项目最外层放入Aleart组件即可
``` javascript
import { utilAlert } from 'sparrowcool';

const App = () => {
    return (
        // 以使用React Navigation项目为例
        <NavigationContainer>
            <AppStack />
            <utilAlert.Alert />
            // 如果需要自定义Alert样式
            // <utilAlert.Alert cancelText='取消' confirmText='确定' {...请看下面utilAlert.Alert支持的props} />
        </NavigationContainer>
    )
});
``` 

2. 在任意组件/或者非组件纯函数中弹出Alert
``` javascript
import React from 'react'
import { View } from 'react-native';
import { utilAlert } from 'sparrowcool';

const HomeScreen = () => {

    React.useEffect(()=>{
        utilAlert.showAlert('提示',()=>utilAlert.closeAlert(),'欢迎使用sparrowcool')
    },[])
    
    return <View />
}

const testShowAlert = () => {
    utilAlert.showAlert('提示',()=>utilAlert.closeAlert(),'欢迎使用sparrowcool')
}
```
## 方法

- **utilAlert.showAlert(title: string, confirm: () => any, content?: string)** 显示Alert

|参数名|类型|必填|默认值|说明|
| --- | --- | --- | --- |---|
|`title`|string|是|`/`|标题|
|`confirm`|() => any|是|`/`|Alert点击确定时，会调用该方法|
|`content`|string|否|`null`|正文|

- **utilAlert.closeAlert()** 关闭Alert

## \<utilAlert.Alert /> Props

|参数名|类型|必填|默认值|说明|
| --- | --- | --- | --- |---|
|`cancelText`|string|否|`取消`|取消文本|
|`cancelTextStyle`|StyleProp\<TextStyle>|否|`/`|取消文字样式|
|`confirmText`|string|否|`确定`|确定文本|
|`confirmTextStyle`|StyleProp\<TextStyle>|否|`/`|确定文字样式|
|`backdropColor`|string|否|`rgba(0, 0, 0, 0.4)`|背景幕布颜色|
|`alertContainerColor`|string|否|`rgba(0, 0, 0, 0.6)`|alert容器背景色|
|`alertContainerStyle`|StyleProp\<ViewStyle>|否|`rgba(0, 0, 0, 0.6)`|alert容器样式|
|`titleStyle`|StyleProp\<TextStyle>|否|`/`|标题样式|
|`contentStyle`|StyleProp\<TextStyle>|否|`/`|内容文字样式|
|`rectangleBorderColor`|string|否|`#cccccc`|边框颜色|

---
