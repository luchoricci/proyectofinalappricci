import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../screens/ProductsScreen/Products'
import Store from '../screens/StoreScreen/Store'
import ProductDetail from '../screens/DetailScreen/ProductDetail'
import { Header } from 'react-native/Libraries/NewAppScreen'
import Home from '../screens/HomeScreen/Home'

const Stack = createNativeStackNavigator()

const RoutesNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      {/* <Stack.Screen component={Home} name="Home"/> */}
      <Stack.Screen component={Store} name="store"/>
      <Stack.Screen component={Products} name="products" />
      <Stack.Screen component={ProductDetail} name="productdetail" />

    </Stack.Navigator>
  )
}

export default RoutesNav