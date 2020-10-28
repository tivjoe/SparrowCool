# \<NavigationBar />

自定义通用导航栏（建议对该组件进行二次封装，封装符合自己app风格的导航栏，例如：返回导航栏，标题导航栏...)

<kbd>
<img src="https://s2.ax1x.com/2020/03/09/8SZUL4.png" alt="8SZUL4.png" />
</kbd>

## 使用

``` javascript
import { NavigationBar } from 'sparrowcool'

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

### 必填参数

无

---

### 可选参数

### `style`
导航栏容器的样式

|类型|必填|
| --- | --- |
|StyleProp<ViewStyle>|否|

---
    
### `leftStyle`
导航栏左边容器样式

|类型|必填|
| --- | --- |
|StyleProp<ViewStyle>|否|
    
---
    
### `leftComponent`
导航栏左边容器里面的组件

|类型|必填|
| --- | --- |
|React.ReactNode|否|

---

### `centerStyle`
导航栏中间部分容器样式

|类型|必填|
| --- | --- |
|StyleProp<ViewStyle>|否|
    
---
    
### `centerComponent`
导航栏中间容器里面的组件

|类型|必填|
| --- | --- |
|React.ReactNode|否|

---

### `rightStyle`
导航栏右边容器样式

|类型|必填|
| --- | --- |
|StyleProp<ViewStyle>|否|
    
---
    
### `rightComponent`
导航栏右边容器里面的组件

|类型|必填|
| --- | --- |
|React.ReactNode|否|
