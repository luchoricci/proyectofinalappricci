import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const PDStyles = StyleSheet.create({
    ProductContainer:{ 
        marginBottom: 20,
        alignItems: "center",
backgroundColor: colors.yellow,

    },
    image: {
       marginTop: 30,
        height: 300,
        width: 250,
      },
      containerImage: {
        alignItems: "center",
      },
      name: {
        fontSize: 40,
        fontFamily: "Oswald",
        marginTop: 15,
      },
      price: {
        fontSize: 18,
        fontFamily: "Oswald",
      },
      description: {
        fontSize: 20,
        marginTop: 12,
        marginBottom: 30,
        marginHorizontal: 10,
      },
      



})



export default PDStyles