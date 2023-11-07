import { View, Text, Image, Pressable } from 'react-native'
import React from 'react';
import CartStyles from './CartStyle';
import Header from '../../components/Header/Header';
import { FlatList } from 'react-native-web';

const Cart = () => {


  return (
    <View >
      <Header title="Cart" />
      <View style={CartStyles.container} >
        <View>
          {CartItems.lenght === 0 && <Text>Cart is empty</Text>}
          {
            CartItems.lenght > 0 && 
            <FlatList
            data={CartItems}
            renderItem={({ item }) => (
              <ProductItem
              />)}
            /> 
          }
          

        </View>

        <View>

          <Text>total</Text>





        </View>

      </View>
    </View>
  )
}

export default Cart