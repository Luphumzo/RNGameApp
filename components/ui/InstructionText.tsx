import { Text, StyleSheet, TextStyle, StyleProp } from "react-native";
import Colors from "../../utility/colors";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

const InstructionText = ({ children, style }: CardProps) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default InstructionText;
