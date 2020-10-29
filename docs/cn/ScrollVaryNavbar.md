# \<ScrollVaryNavbar />

滚动视图动态切换导航栏；当视图在顶部未滚动时会显示副导航栏；当滚动到指定距离时，副导航栏会逐渐消失，主导航栏会逐渐至完全显示

## 使用

``` javascript
import { FlatListProps,View } from 'react-native';
import { ScrollVaryNavbar , NavigationBar , Text } from 'sparrowcool';

const HomeScreen = () => {

    const flatListOptions: FlatListProps<Number> = {
        style: [{ flex: 1 , backgroundColor:'white'}],
        data: [0,1,2,3,4,5,6,7,8],
        renderItem: ({ item, index }) => <View style={{width:200,height:300,marginBottom:20,backgroundColor:'black'}} />
    };
    
    return (
      <ScrollVaryNavbar 
          type = 'FlatList', // 滚动视图类型 'ScrollView' | 'FlatList' | 'SectionList'
          mainNavbar = {<NavigationBar centerComponent={<Text>Main</Text>} />} // 主导航栏
          dimensionNavbar = {<NavigationBar centerComponent={<Text>Dimension</Text>} />} // 副导航栏
          onHeightStartShowMain = {80} // 当滑动到多少距离时开始显示主导航栏，副导航栏开始消失
          onHeightFullShowMain = {120} // 当滑动到多少距离时完全显示主导航栏，副导航栏完全消失
          listOptions = {flatListOptions}
          useNativeDriver = {true}  // 是否启用原生驱动动画 如果副导航栏没有点击事件建议为true，如果副导航栏有点击事件请false
      />
    )
});
```

## Props

|参数名|类型|必填|默认值|说明|
| --- | --- | --- | --- |---|
|`type`|string|是|`/`|`ScrollView` `FlatList` `SectionList`|
|`mainNavbar`|React.ReactNode|是|`/`|主导航栏|
|`onHeightStartShowMain`|number|是|`/`|当滑动到多少距离时开始显示主导航栏，副导航栏开始消失|
|`onHeightFullShowMain`|number|是|`/`|当滑动到多少距离时完全显示主导航栏，副导航栏完全消失|
|`listOptions`|any|是|`/`|根据列表类型传入相应列表的Props配置，分别为`FlatListProps` `SectionListProps` `ScrollView`|
|`useNativeDriver`|boolean|是|`/`|是否启用原生驱动动画 如果副导航栏没有点击事件建议未true，如果副导航栏有点击事件请false|
|`dimensionNavbar`|React.ReactNode|否|`/`|副导航栏|
|`onScrollY`|(valueY: number) => void |否|`/`|当滑动时，会调用该方法。`valueY`为列表垂直滚动的距离|
|`customAnimationMain`|(scrollY: Animated.Value) => Animated.WithAnimatedObject<ViewStyle>|否|`/`|自定主导航栏动画|
|`customAnimationDimension`|(scrollY: Animated.Value) => Animated.WithAnimatedObject<ViewStyle>|否|`/`|自定副导航栏动画|

---
