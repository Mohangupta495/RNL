import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationStack from './src/navigation/NavigationStack'
import store from './src/redux/store'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import GoogleLoginHandler from './src/utils/GoogleLoginHandler'
import { Button } from 'react-native'
import PhoneNumberAuthentication from './src/screens/LoginPage'

GoogleSignin.configure({
  webClientId: '72367344223-ks18bj8pbl8kmkiish04b095ag4jidn8.apps.googleusercontent.com',
});


export class App extends Component {
  
  render() {
    const Stack = createNativeStackNavigator();
    return (
      <PhoneNumberAuthentication/>
    //   <Provider store = { store }>
    //   <NavigationContainer>
    //   <NavigationStack/>
    // </NavigationContainer>
    // </Provider>
    )
  }
}

export default App