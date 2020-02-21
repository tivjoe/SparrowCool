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
        defaultHeader={<NavigationBackBar backIconComponent={<Text>default</Text>} onPressBack={() => { }} />}
        defaultHeaderHeight={44}
        alwayShowComponent={<NavigationBackBar backIconComponent={<Text>always</Text>} onPressBack={() => { }} />}
        onPullUpShowHeader={<NavigationBackBar backIconComponent={<Text>pullUp</Text>} onPressBack={() => { }} />}
        bodyContainer={
          <FlatList
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