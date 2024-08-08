import React from 'react'
import { Animated, StyleSheet, View } from 'react-native'

export default function CardDisplayComponent({slideAnimation, fadeAnimation, shadowAnimation, card} : {slideAnimation: Animated.Value, fadeAnimation: Animated.Value, shadowAnimation: Animated.Value, card: string}) {
  return (
    <View>
      <Animated.View
        style={{
          transform: [{ scale: slideAnimation }],
          opacity: fadeAnimation,
          shadowRadius: shadowAnimation,
          shadowOpacity: 0.85,
        }}
      >
        <Animated.Image source={{ uri: card }} style={{ ...styles.image }} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 340,
    borderRadius: 18,
    resizeMode: "contain",
  },
});
