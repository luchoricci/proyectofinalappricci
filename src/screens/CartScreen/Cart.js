import { View, Text, Image, Pressable } from 'react-native'
import React from 'react';
import CartStyles from './CartStyle';
import Header from '../../components/Header/Header';

const Cart = () => {


  return (
    <View >
      <Header title="Cart" />
      <View style={CartStyles.container} >
        <View>
          <Image
          />
          <Text>name</Text>
          <Text>price</Text>
          <Pressable>-</Pressable>
          <Text>quantity</Text>
          <Pressable>+</Pressable>
          <Text>total</Text>
        </View>

        <View>

          <Text>total</Text>





        </View>

      </View>
    </View>
  )
}

export default Cart