import { View, Text } from "react-native";

function PrimaryButton({ children }: any) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;
