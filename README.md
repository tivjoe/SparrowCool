# SparrowCool

SparrowCool使用TypeScript+hooks，基于react-native开发的UI库，封装原生第三方sdk库和原生工具等。

特点 ： 

* 高自定义ui库，使用简单，你可以将现有的组件，优秀的第三方组件作为props或使用默认值传入SparrowCool的ui组件props；最大限度还原设计效果并且保持高性能。（持续更新中）

* 封装原生功能，例如toast，loading，相机等。（稍等嗷）

* 封装国内流行的第三方sdk和原生工具，例如地图，推送等。（稍等嗷）

（ 目前开发的组件都是在工作中经常使用，并且我觉得可以更好的优化用户体验,视觉效果和开发体验，这也是我开发SparrowCool的初衷；持续更新中，如何你有什么建议，问题或者灵感，创意，设计，请一定发issues，我想与你深入讨论！）

[Example](https://github.com/HackJoe/SparrowCool-Example) : 所有组件效果gif图，或者直接下载运行体验。components目录里可能会有能帮助你节省时间的组件，有的话ctrl+c就完事了。

---

# 安装

```
yarn add sparrowcool
```

# 使用

直接从SparrowCool包中，import即可

```
import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { NavigationBackBar } from 'sparrowcool';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationBackBar 
            title="SparrowCool!"
            backIconComponent={<Text>Back</Text>}
            onPressBack: () => console.log("SparrowCool!!!");
        />
      </View>
    );
  }
}
```
