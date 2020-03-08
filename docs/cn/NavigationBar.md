# \<NavigationBar /> 自定义通用导航栏

## props

参数名|类型|必填|备注
--|:--:|--:|--:
style|样式|可选|导航栏父view的样式
leftStyle|样式|可选|导航栏左边view的样式
leftComponent|组件|可选|显示在导航栏左边的组件
centerStyle|样式|可选|导航栏中间view的样式
centerComponent|组件|可选|显示在导航栏中间的组件
rightStyle|样式|可选|导航栏右边view的样式
rightComponent|组件|可选|显示在导航栏右边的组件

## 用法

建议不要直接使用该组件，先在项目中的通用组件自定义化配合第三方库（例如react-native-vector-icons），封装可复用的导航栏，再在每个页面中引入你封装的导航栏进行使用。你也可以在[Example](https://github.com/HackJoe/SparrowCool-Example) 中app/components/NavBar目录下直接复制封装好的使用。

```
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

## 默认样式参考
```
container: {
    width: "100%",
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
},
left: {
    paddingLeft: 14,
    width: "33%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
},
center: {
    width: "33%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
},
right: {
    paddingRight: 14,
    width: "33%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
}
```

<kbd>
<img src="https://s2.ax1x.com/2020/03/09/8SZUL4.png" alt="8SZUL4.png" />
</kbd>