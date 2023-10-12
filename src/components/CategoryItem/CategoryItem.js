import { Text, Pressable } from "react-native";
import React from "react";
import CTStyles from "./CIStyle";
import { setCategory } from "../../Redux/Slice/FirstSlice";
import { useDispatch } from "react-redux";

const CategoryItem = ({ item, navigation }) => {
  const dispatch = useDispatch();
const onHandleItem = () =>{
 dispatch(setCategory(item));
  navigation.navigate("products", {item: item });
};

  return (
    <Pressable onPress={() => onHandleItem()} >
      <Text style={CTStyles.categoryText}>{item}</Text>
    </Pressable>
  );
};



export default CategoryItem;
