# \<NavigationBar />

自定义通用导航栏（建议对该组件进行二次封装，封装符合自己app风格的导航栏，例如：返回导航栏，标题导航栏...)

## 使用

``` javascript
import { NavigationBar } from 'sparrowcool';

<NavigationBar
    style={{}}
    leftStyle={{}}
    leftComponent={<Icon name='' size='' color='' />}
    centerStyle={{}}
    centerComponent={<Text style={{}} >Title</Text>}
    rightStyle={{}}
    rightComponent={}
/>
```

## Props

|参数名|类型|必填|说明|
| --- | --- | --- | --- |
|`style`|StyleProp\<ViewStyle>|否|导航栏容器的样式|
|`leftStyle`|StyleProp\<ViewStyle>|否|导航栏左边容器的样式|
|`leftComponent`|React.ReactNode|否|导航栏左边容器里面的组件|
|`centerStyle`|StyleProp\<ViewStyle>|否|导航栏中间容器的样式|
|`centerComponent`|React.ReactNode|否|导航栏中间容器里面的组件|
|`rightStyle`|StyleProp\<ViewStyle>|否|导航栏右边容器的样式|
|`rightComponent`|React.ReactNode|否|导航栏右边容器里面的组件|

---

<kbd>
<img src="https://s2.ax1x.com/2020/03/09/8SZUL4.png" alt="8SZUL4.png" />
</kbd>
