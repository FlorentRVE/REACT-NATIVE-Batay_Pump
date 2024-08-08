import React from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export default function GameOverComponent({
  setLife,
  drawCard
}: {
  setLife: (life: number) => void;
  drawCard: () => void;
}) {
  const resetGame = () => {
    setLife(3);
    drawCard();
  };

  return (
    <View>
      <Animated.View>
        <Pressable style={styles.bouton} onPress={resetGame}>
          <Text style={styles.text}>💀 GAME OVER 💀</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontFamily: "SpaceMono",
    fontWeight: "bold",
    color: "white",
  },
  bouton: {
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    backgroundColor: "black",
    width: 300,
    height: 80,
    borderRadius: 30,
    marginTop: 20,
  },
});