import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RoutesNav from './RoutesNav';
import UProfile from '../screens/UProfileScreen/UProfile';
import Cart from '../screens/CartScreen/Cart';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';



const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ title: "", headerShown: false, }}>
      <Tab.Screen options={{ tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="storefront" size={28} color={focused ? colors.yellow : colors.red} /> }} name="Store" component={RoutesNav} />
      <Tab.Screen options={{ tabBarIcon: ({ focused }) => (<AntDesign name="user" size={28} color={focused ? colors.yellow : colors.red} />), }} name="Profile" component={UProfile} />
      <Tab.Screen options={{ tabBarIcon: ({ focused }) => <AntDesign name="shoppingcart" size={28} color={focused ? colors.yellow : colors.red} /> }} name="Cart" component={Cart} />
    </Tab.Navigator>
  )
}

export default TabNav