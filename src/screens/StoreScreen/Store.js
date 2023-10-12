import {View, FlatList} from "react-native";
import Header from "../../components/Header/Header";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { useSelector } from "react-redux";
import { useGetCategoryListQuery } from "../../Services/ecApi";


const Store = ({navigation}) => {

const CategoryList = useSelector(state=> state.firstSlice.allCategories)


const datos = useGetCategoryListQuery();

console.log(JSON.stringify(datos.null,""));

  return (
    <View>
      <Header title="Categories" />
      <View >
     <FlatList 
     data={CategoryList}
     keyExtractor={(key) => key}
     renderItem={({item}) => <CategoryItem navigation={navigation} item={item} />}

     
     />
    </View>




    </View>

  );
};

export default Store;