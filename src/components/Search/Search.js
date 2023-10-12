import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import SearchStyles from "./SearchStyle";


const Search = ({ text, setText }) => {


  const clearText = () => {
    setText(null);
  };

  return (
    <View style={SearchStyles.container}>
      <TextInput
        onChangeText={(value) => setText(value)}
        value={text}
        style={SearchStyles.input}
        placeholder="Search product"
      />
      <Pressable onPress={() => clearText()}>
        <AntDesign name="close" size={30} color="black" />
      </Pressable>
    </View>
  );
};



export default Search;
