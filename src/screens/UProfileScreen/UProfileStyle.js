import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


const UProfileStyles = StyleSheet.create({
    Container: {
        alignItems:"center",
        marginTop: 8,
    },
    Image: {
        width: 200,
        height: 200,
        borderRadius: 80,
        marginTop: 10,
      },
      iconsContainer:{
        justifyContent: "center",
        display: "flex",
        flexDirection: "row"
    

      },
      icons:{
        backgroundColor: colors.yellow,
        margin: 14,
        padding: 6,
        borderRadius:9

      },

      infoContainer: {
       marginTop: 6,

      },
      infoText: {
        marginBottom: 6,

      },

})



export default UProfileStyles