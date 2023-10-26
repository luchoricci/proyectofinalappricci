import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from '../screens/LogIn-RegistScreens/LogInScreen/LogIn'
import SignIn from '../screens/LogIn-RegistScreens/SignInScreen/SignIn'

const Stack = createNativeStackNavigator()



const AuthNav = () => {
  return (
<Stack.Navigator screenOptions={{headerShown: false }} >
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
  )
}

export default AuthNav