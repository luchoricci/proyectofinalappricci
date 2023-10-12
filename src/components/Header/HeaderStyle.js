import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


const HeaderStyles = StyleSheet.create({
    container: {
      height: 95,
      width: "100%",


     

     
      backgroundColor: colors.orange,


    
    },
    headerTextContainer:{
alignSelf: "center"
    },

    headerText: {
      marginTop:30,
      fontSize: 35,
      color: colors.yellow,
   
      fontFamily: "Oswald",
      justifyContent: "center"
   
    

  
    
    },
    headerButtonContainer: {
      

  
    },
    headerButton: {
 
      backgroundColor: colors.red,
      marginTop: 50,
      borderRadius: 20,
      marginRight:60,
     
      marginLeft: 10,
      width:45,
      position:"absolute"

    },

    headerButtonText:{
      color: colors.yellow,
    }
  });




export default HeaderStyles;
