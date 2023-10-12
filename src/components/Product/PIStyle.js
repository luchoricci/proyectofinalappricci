import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const PIStyles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginVertical: 10,
      borderColor: colors.red,
      borderRadius: 10,
      borderWidth: 2,
      height: 100,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
      fontWeight: "900",
      marginLeft: 20,
    },
    textMin: {
      fontSize: 10,
      fontWeight: "900",
      marginLeft: 20,
    },
    image: {
      marginRight: 10,
    },
  });

  export default PIStyles

