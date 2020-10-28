# \<ImmersiveSafeAreaView />

沉浸式安全区域；适配android异形屏，ios刘海屏；该组件应套在页面最外层，嵌套在内部组件会延伸到状态栏之下绘制；

## 使用

``` javascript
import { ImmersiveSafeAreaView } from 'sparrowcool';

const HomeScreen = () => {
    return (
       <ImmersiveSafeAreaView>
          // ...
       </ImmersiveSafeAreaView>
    )
});
```

如果需要自定义状态栏，请使用\<ImmersiveStatusBar />；ImmersiveStatusBar继承React Native自带的StatusBar组件的所有Props
``` javascript
import { ImmersiveSafeAreaView , ImmersiveStatusBar } from 'sparrowcool';

const HomeScreen = () => {
    return (
       <ImmersiveSafeAreaView customizedStatusBar={true}>
          <ImmersiveStatusBar />
          // ...
       </ImmersiveSafeAreaView>
    )
});
``` 

## Props

|参数名|类型|必填|默认值|说明|
| --- | --- | --- | --- |---|
|`isComplexImmersive`|boolean|否|`false`|需要复杂的沉浸式？默认为false，嵌套在内部的组件会被`paddingTop：状态栏高度`属性约束，请传入`style属性`并设置`backgroundColor:导航栏背景色`即可实现沉浸式；如果状态栏非纯色，例如渐变色，图片,视频...也需要沉浸式，则设置为true|
|`isSmallView`|boolean|否|`false`|嵌套在内部的组件是否只是一个小组件，默认为false；如果嵌套的只是：导航栏...这样的小组件则设置为true|
|`statusContentMode`|string|否|`dark-content`|状态栏文字：黑色`dark-content`；白色`light-content`|
|`customizedStatusBar`|boolean|否|`false`|是否要自定义状态栏，默认false；如果为true，请使用`<ImmersiveStatusBar />`进行自定义状态栏，该组件继承React Native自带的StatusBar组件的所有Props|
|`safeBottom`|boolean|否|`false`|是否需要适配屏幕底部，默认false；为true，会在底部添加一个和底部安全栏高度相同的view|
|`safeBottomColor`|string|否|`white`|底部安全栏颜色|
|`style`|StyleProp\<ViewStyle>|否|`/`|ImmersiveSafeAreaView样式|

---
