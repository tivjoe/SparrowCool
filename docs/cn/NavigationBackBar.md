# \<NavigationBackBar /> 带返回的导航栏

## props

参数名|类型|必填|备注
--|:--:|--:|--:
style|样式|可选|导航栏父view的样式
title|string|可选|标题
titleStyle|样式|可选|标题样式
backIconComponent|组件|必填|左边返回块组件
onPressBack|方法|必填|点击回调

## 用法

建议不要直接使用该组件，先在项目中的通用组件自定义化配合第三方库（例如react-native-vector-icons），封装可复用的导航栏，再在每个页面中引入你封装的导航栏进行使用。你也可以在[Example](https://github.com/HackJoe/SparrowCool-Example) 中app/components/NavBar目录下直接复制封装好的使用。

```
import { NavigationBackBar } from 'sparrowcool'

<NavigationBackBar
    style={{}}
    title="Title"
    titleStyle={{}}
    backIconComponent={<Icon name='' size='' color='' />}
    onPressBack={()=>Navigation.Back()}
/>
```

<kbd>
<img src="https://s2.ax1x.com/2020/03/09/8SZNyF.png" alt="8SZNyF.png" />
</kbd>