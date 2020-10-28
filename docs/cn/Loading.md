# Loading

全局弹出Loading，同时只能存在一个Loading

## 使用

1. 只需要在项目最外层放入Loading组件即可
``` javascript
import { utilLoading } from 'sparrowcool';

const App = () => {
    return (
        // 以使用React Navigation项目为例
        <NavigationContainer>
            <AppStack />
            <utilLoading.Loading />
            // 如果需要自定义Loading样式
            // <utilLoading.Loading backdropColor='black' {...请看下面utilLoading.Loading支持的props} />
        </NavigationContainer>
    )
});
``` 

2. 在任意组件/或者非组件纯函数中弹出Loading
``` javascript
import React from 'react'
import { View } from 'react-native';
import { utilLoading } from 'sparrowcool';

const HomeScreen = () => {

    React.useEffect(()=>{
        utilLoading.showLoading('加载中');
            setTimeout(() => {
            utilLoading.closeLoading()
        }, 2000);
        
        // 使用自动loading，传入一个异步方法。当异步方法执行完毕后自动关闭Loading
        utilLoading.autoLoading(
            async () => { await setTimeout(() => console.log('延迟2s'), 2000) },
            '加载中'
        );
    },[])
    
    return <View />
}

const testShowLoading = () => {
    utilLoading.showLoading('加载中');
    setTimeout(() => {
        utilLoading.closeLoading()
    }, 2000);
}
```
## 方法

- **utilLoading.autoLoading(func: async () => any, title?: string)** 显示loading，当异步方法执行完毕后会自动关闭Loading

|参数名|类型|必填|默认值|说明|
| --- | --- | --- | --- |---|
|func|async () => any|是|`/`|执行这个异步方法，当执行完毕时自动关闭Loading|
|`title`|string|否|`null`|标题|

- **utilLoading.showLoading(title?: string)** 显示loading

|参数名|类型|必填|默认值|说明|
| --- | --- | --- | --- |---|
|`title`|string|否|`null`|标题|

- **utilLoading.closeLoading()** 关闭Loading

## \<utilLoading.Loading /> Props

|参数名|类型|必填|默认值|说明|
| --- | --- | --- | --- |---|
|`backdropColor`|string|否|`rgba(0, 0, 0, 0.4)`|背景幕布颜色|
|`activityIndicatorConfig`|ActivityIndicatorProps|否|`/`|继承React native ActivityIndicator组件所有Props|
|`loadingContainerStyle`|StyleProp\<ViewStyle>|否|`/`|loading容器样式|
|`customLoading`|(visible: boolean, title: string 或 undefined) => React.ReactNode|否|`/`|替换成自定义loading组件;会调用该方法返回一个组件。该方法会传入`visible:当前显示状态`, `title: 标题`|

---
