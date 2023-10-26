import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

const SignInStyles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
      },
      title: {
        marginTop: 60,
        fontSize: 24,
        marginBottom: 70,
        color: "white",
        backgroundColor: colors.red,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,

      },
      input: {
     
        height: 50,
        borderColor: colors.red,
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 50,
        paddingHorizontal: 60,
        fontSize: 17,

       
      },
      button: {
        backgroundColor: colors.orange,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
      },
      registroText: {
        marginTop: 30,
        fontSize: 18,
        color: colors.heavyred,
      },
    
    

})



export default SignInStyles