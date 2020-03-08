# \<NavigationSpringBar /> 吸顶导航栏

后面我还会开更多参数让大家更好的自定义吸顶导航栏（计划中：自定义动画，监听手势，滑动距离回调等）

## props

参数名|类型|必填|备注
--|:--:|--:|--:
defaultHeader|组件|必填|默认显示的导航栏和下滑时显示的导航栏
defaultHeaderHeight|number|必填|defaultHeader的高度
bodyContainer|组件|必填|当前页面除导航栏以外的组件都放在这个里面
style|样式|可选|最外层样式
alwayShowComponent|组件|可选|无论如何滑动，一直都固定在顶部显示的组件
onPullUpShowHeader|组件|可选|上滑时显示的导航栏
onPullUpShowHeaderHeight|number|可选|onPullUpShowHeader高度
isShowDefaultHeaderOnScrollToBottom|boolean|可选|默认：true 当滑动到最底部时是否显示defaultHeader
isShowDefaultHeaderOnDown|boolean|可选|默认：true 下滑时是否显示默认导航栏defaultHeader
isShowDefaultHeaderOnDownMoveY|number|可选|默认：600 下滑多少距离时显示defaultHeader


## 用法

```
import { NavigationSpringBar } from 'sparrowcool'

<NavigationSpringBar
            defaultHeaderHeight={44}
            onPullUpShowHeaderHeight={44}
            isShowDefaultHeaderOnScrollToBottom={true}
            isShowDefaultHeaderOnDown={true}
            isShowDefaultHeaderOnDownMoveY={600}
            defaultHeader={默认导航栏和下滑时显示的导航栏}
            onPullUpShowHeader={上滑时显示的导航栏}
            alwayShowComponent={无论如何滑动，一直都固定在顶部显示的组件} 
            bodyContainer={
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.leftText}
                    renderItem={
                        ({ item,index }) =>
                            <View style={{ marginTop: 14 }} >
                                {itemComponent}
                            </View>
                    }
                />
            }
        />
```

<kbd>
<a href="https://imgchr.com/i/8SZb6S"><img src="https://s2.ax1x.com/2020/03/09/8SZb6S.gif" alt="8SZb6S.gif"/></a>
</kbd>