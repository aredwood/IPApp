/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import getIP from "./src/getIP";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const fetching = "Fetching your IP address";

interface Props { }
export default class App extends Component<Props> {

  constructor(props: any) {
    super(props);

    this.state = {
      ip: "",
      isLoading: true
    }
  }
  async componentDidMount() {
    const ip = await getIP();

    this.setState({
      ...this.state,
      ip,
      isLoading: false
    })
  }

  render() {
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>{this.state.ip}</Text>
    //     <Text style={styles.instructions}>To get started, edit App.tsx</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //   </View>
    // );

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{(this.state.isLoading) ? fetching : this.state.ip}</Text>
        <Text style={styles.instructions}>Thanks to canihazip.com/s</Text>
      </View>
    )

  }
}

const ip = "22";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});