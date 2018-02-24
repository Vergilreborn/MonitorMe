import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/screens/LoginScreen'

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>This is the test application</Text>
      // </View>
      <LoginScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
