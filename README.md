# SparrowCool

SparrowCool使用TypeScript+hooks，基于react-native开发的纯函数高性能UI库，封装原生第三方sdk库和原生工具等。

特点 ： 

* 高度自定义的ui库，使用简单，可用参数丰富，你可以将现有的组件配合优秀的第三方库组件作为props或使用默认值传入SparrowCool的ui组件；使你最大限度且高效地还原设计效果并且保持高性能。（ui持续更新中）

* 封装原生功能，例如toast，loading，相机等。（稍等嗷，马上来）

* 封装国内流行的第三方sdk和原生工具，例如地图，推送等。（稍等嗷，马上来）

（ 目前开发的组件和工具都是经常使用的，并且我觉得可以更好的优化用户体验，视觉效果和开发体验，这也是我开发SparrowCool的初衷！持续更新中，如果你有什么建议，问题或者灵感，创意，设计，请一定发issues，我想与你深入讨论！）

[Example-示例](https://github.com/HackJoe/SparrowCool-Example) : 所有组件gif图都在这，或者直接下载运行体验。app/components目录下很多组件都是SparrowCool配合优秀的第三方库封装的可以直接复制即用的组件；也许你恰好用到，会帮助你节省很多时间，有的话ctrl+c就完事了。


# 安装

react-native >= 0.60.0

```
yarn add sparrowcool

或

npm install sparrowcool
```

# 使用

直接从SparrowCool包中，import即可

```
import React from 'react';
import { View } from 'react-native';
import { NavigationBackBar } from 'sparrowcool';

const App = () => {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationBackBar 
            title="SparrowCool!"
            backIconComponent={<Text>Back</Text>}
            onPressBack: () => console.log("SparrowCool!!!");
        />
        {body}
      </View>
    );
  }
}

export default App;
```

# 文档

目前只有中文文档，等再多更新几个组件后，英文文档马上来。

## 导航栏

[ \<NavigationSpringBar /> 吸顶导航栏](./docs/cn/NavigationSpringBar.md)

[ \<NavigationBar /> 自定义通用导航栏](./docs/cn/NavigationBar.md)

[ \<NavigationBackBar /> 带返回的导航栏](./docs/cn/NavigationBackBar.md)

[持续更新中！]()

# 部分组件效果图

全部效果图请在[Example-示例](https://github.com/HackJoe/SparrowCool-Example)或相应组件文档中查看

## \<NavigationSpringBar /> 吸顶导航栏

<kbd>
<a href="https://imgchr.com/i/8SZb6S"><img src="https://s2.ax1x.com/2020/03/09/8SZb6S.gif" alt="8SZb6S.gif"/></a>
</kbd>




