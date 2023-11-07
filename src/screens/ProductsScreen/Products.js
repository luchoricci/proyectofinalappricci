import { FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState, } from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import ProductItem from '../../components/Product/ProductItem'
import { useSelector } from 'react-redux';
 import { setCategory } from '../../Redux/Slice/FirstSlice'
import { current } from '@reduxjs/toolkit'




const Products = ({ route, navigation }) => {


    const [categoryProd, setCategoryProd] = useState([]);
    const [text, setText] = useState(null);
    const { item } = route.params;
    const [CartItems, setCartItems] = useState([],)
    
    
    const ProductsList = useSelector(state => state.firstSlice.allProducts);


    const productsFilterByCategory = useSelector(
        (state) => state.firstSlice.productsFilterByCategory
      );
    

    useEffect(() => {
       setCategoryProd(productsFilterByCategory);
        if (text) {
            const nameProduct = ProductsList.filter((el) => el.name.toLowerCase() === text.toLowerCase());
            setCategoryProd(nameProduct);
        }
    }, [text, item]);

    const onAddToCart = (id) => {
      const pincart = ProductsList.find ((item) => item.id === id);
      if(CartItems?.find((item) => item.id === id)?.quantity === Number(pincart.stock)) return;
      if(CartItems?.length ===0){
        setCartItems([{...item, quantity :1}])
      }
      if(CartItems.length > 0 && !CartItems?.find((item) => item.id === id)) {
        setCartItems([...CartItems, {...pincart, quantity: 1}])
      }
      if(CartItems.length > 0 && CartItems?.find((item) => item.id === id)) {
        setCartItems((currentCart) => {
            return currentCart.map((item) => {
                if(item.id === id) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            } )
        });
      }
    }
console.log({CartItems});
   
    return (
        <SafeAreaView>
            <Header title={item} navigation={navigation} />
            <Search text={text} setText={setText} />

            <FlatList
                data={categoryProd}
                keyExtractor={ProductsList.id}
                renderItem={({ item }) => (
                    <ProductItem navigation={navigation} item={item} 
                    onAddToCart={onAddToCart}/>
                )}
            />

 
        </SafeAreaView>
    )
}


export default Products