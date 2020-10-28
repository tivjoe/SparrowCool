# \<Switch />

开关选择组件

## 使用

``` javascript
import React from 'react';
import { Switch } from 'sparrowcool';

const HomeScreen = () => {

    const [status,setStatus]=React.useState(false);

    return (
       <Switch value={status} onValueChange={()=>setStatus(!status)} />
    )
    
});
``` 

## Props

|参数名|类型|必填|默认值|说明|
| --- | --- | --- | --- |---|
|`value`|boolean|是|`/`|表示此开关是否打开；false为关闭状态|
|`onValueChange`|() => void|是|`/`|当value改变时，会调用该方法|
|`disabled`|boolean|否|`false`|默认为false;如果为true则禁用此组件的交互|
|`onOpenBgColor`|string|否|`#65C066`|打开时的背景色|
|`onCloseBgColor`|string|否|`#dddddd`|关闭时的背景色|
|`circleColor`|string|否|`white`|圆的颜色|
|`scalingRatio`|number|否|`1`|整体缩放比例|

---
