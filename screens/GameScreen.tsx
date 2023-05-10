import { View, StyleSheet, Alert, Text } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomNumberBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  if (rndNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
}

let minBoundary: number = 1;
let maxBoundary: number = 100;
function GameScreen({ chosenNumber, onGameOver }: any) {
  const initialGuess = generateRandomNumberBetween(1, 100, chosenNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      onGameOver();
    }
  }, [currentGuess, chosenNumber, onGameOver]);

  function nextGuessHandler(direction: string) {
    if (
      (direction === "lower" && currentGuess < chosenNumber) ||
      (direction === "higher" && currentGuess > chosenNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong..", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            style={styles.buttonContainer}
            onPress={nextGuessHandler.bind(null, "higher")}
          >
            +
          </PrimaryButton>
          <PrimaryButton
            style={styles.buttonContainer}
            onPress={nextGuessHandler.bind(null, "lower")}
          >
            -
          </PrimaryButton>
        </View>
      </Card>
      <View>
        <InstructionText>LOG ROUNDS</InstructionText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    key: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
