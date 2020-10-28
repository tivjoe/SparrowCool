# \<ImmersiveStatusBar />

自定义沉浸式状态栏

## 使用

``` javascript
import { ImmersiveSafeAreaView , ImmersiveStatusBar } from 'sparrowcool';

const HomeScreen = () => {
    return (
       <ImmersiveSafeAreaView customizedStatusBar={true}>
          <ImmersiveStatusBar 
            barStyle='light-content'
            config={{
               // 在这里可以设置React Native自带的StatusBar组件的所有props
               animated:true,
               // ...
            }}
          />
          // ...
       </ImmersiveSafeAreaView>
    )
});
``` 

## Props

|参数名|类型|必填|默认值|说明|
| --- | --- | --- | --- |---|
|`barStyle`|string|否|`dark-content`|可选：`dark-content`  `light-content` `default` `undefined`|
|`config`|StatusBarProps|否|`/`|可以设置React Native自带的StatusBar组件的所有props|

---
