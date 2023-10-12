import { View, Text, Pressable } from "react-native";
import React from "react";
import HeaderStyles from "./HeaderStyle";


const Header = ({ title, navigation }) => {
  return (
    <View style={HeaderStyles.container}>
      
       
      
      <View style={HeaderStyles.headerTextContainer}>
        <Text style={HeaderStyles.headerText}> {title} </Text>
      </View>
      <Pressable style={HeaderStyles.headerButton} onPress={() => navigation.goBack()}>
          <Text style={HeaderStyles.headerButtonText}> Back </Text>
        </Pressable>
    </View>
  );
};


export default Header;
