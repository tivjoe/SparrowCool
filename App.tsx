/**
 * @file Sample SparrowCool
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { NavigationBar, NavigationBackBar, NavigationSpringBar } from './SparrowCool';

class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Magic SparrowCool!</Text>
      // </View>
      <NavigationSpringBar
        defaultHeaderHeight={88}
        onPullUpShowHeaderHeight={44}
        isShowDefaultHeaderOnScrollToBottom={true}
        isShowDefaultHeaderOnDown={true}
        isShowDefaultHeaderOnDownMoveY={600}
        defaultHeader={<NavigationBackBar style={{ backgroundColor: "red", height: 88 }} backIconComponent={<Text>default</Text>} onPressBack={() => { }} />}
        alwayShowComponent={<NavigationBackBar style={{ backgroundColor: "blue" }} backIconComponent={<Text>always</Text>} onPressBack={() => { }} />}
        onPullUpShowHeader={<NavigationBackBar style={{ backgroundColor: "yellow" }} backIconComponent={<Text>pullUp</Text>} onPressBack={() => { }} />}
        bodyContainer={
          <FlatList
            style={{ flex: 1 }}
            data={[
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ]}
            renderItem={({ item, index }) => <NavigationBar centerComponent={<Text>{index}</Text>} />}
          />}
      />


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;