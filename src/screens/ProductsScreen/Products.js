import { FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState, } from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import ProductItem from '../../components/Product/ProductItem'
import { useSelector } from 'react-redux';
 import { setCategory } from '../../Redux/Slice/FirstSlice'




const Products = ({ route, navigation }) => {


    const [categoryProd, setCategoryProd] = useState([]);
    const [text, setText] = useState(null);
    const { item } = route.params;
    
    const ProductsList = useSelector(state => state.firstSlice.allProducts);


    const productsFilterByCategory = useSelector(
        (state) => state.firstSlice.productsFilterByCategory
      );
    
     
      console.log("ITEM is category selected", item);
// console.log ("PRODUCTS FROM STORE", JSON.stringify(ProductsList,null, " "))
    useEffect(() => {
       setCategoryProd(productsFilterByCategory);
        if (text) {
            const nameProduct = ProductsList.filter((el) => el.name.toLowerCase() === text.toLowerCase());
            setCategoryProd(nameProduct);
        }
    }, [text, item]);


    return (
        <SafeAreaView>
            <Header title={item} navigation={navigation} />
            <Search text={text} setText={setText} />

            <FlatList
                data={categoryProd}
                keyExtractor={ProductsList.id}
                renderItem={({ item }) => (
                    <ProductItem navigation={navigation} item={item} />
                )}
            />


        </SafeAreaView>
    )
}


export default Products