import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


const SearchStyles = StyleSheet.create({
    container: {
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
    },
    input: {
      width: "78%",
      borderWidth: 1,
      borderRadius: 8,
      borderColor: colors.heavyred,
      padding: 10,
      fontSize: 20,
      marginRight: 15,
    },
  });

  export default SearchStyles