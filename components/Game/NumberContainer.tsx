import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utility/colors";
function NumberContainer({ children }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  numberText: {
    color: Colors.secondary,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
