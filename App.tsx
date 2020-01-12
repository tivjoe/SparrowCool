/**
 * @file Sample SparrowCool
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Magic SparrowCool!</Text>
      </View>
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