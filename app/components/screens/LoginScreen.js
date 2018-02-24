import React, {Component} from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from '../../stylesheets/LoginScreen'

class LoginScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
        <View>
          <Text>Login</Text>
        </View>
        <View>
          <View>
            <Text>Username:</Text>
            <TextInput placeholder="UserName"/>
          </View>
        </View>
        <View>
          <View>
            <Text>Password:</Text>
            <TextInput placeholder="Password"/>
          </View>
        </View>
        
      </View>
    )
  }
}

export default LoginScreen