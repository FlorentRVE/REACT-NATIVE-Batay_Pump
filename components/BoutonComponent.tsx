import React from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export default function BoutonComponent({ shakeAnimation, drawCard } : {shakeAnimation: Animated.Value, drawCard: () => void}) {
  return (
    <View>
      <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
        <Pressable style={styles.bouton} onPress={drawCard}>
          <Text style={styles.text}>PIOCHER UNE CARTE</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: "SpaceMono",
    fontWeight: "bold",
  },
  bouton: {
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    backgroundColor: "goldenrod",
    width: 300,
    height: 50,
    borderRadius: 10,
  },
});