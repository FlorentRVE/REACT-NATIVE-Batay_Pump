import React from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export default function BoutonComponent({ shakeAnimation, drawCard } : {shakeAnimation: Animated.Value, drawCard: () => void}) {
  return (
    <View>
      <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
        <Pressable style={styles.bouton} onPress={drawCard}>
          <Text style={styles.text}>Tirer une carte</Text>
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
  },
  bouton: {
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "yellow",
    backgroundColor: "red",
    width: 300,
    height: 80,
    borderRadius: 30,
    marginTop: 20,
  },
});