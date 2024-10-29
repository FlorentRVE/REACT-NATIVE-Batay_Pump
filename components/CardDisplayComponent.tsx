import React from "react";
import { Animated, StyleSheet, View, Image } from "react-native";

export default function CardDisplayComponent({
  slideAnimation,
  fadeAnimation,
  shadowAnimation,
  card,
}: {
  slideAnimation: Animated.Value;
  fadeAnimation: Animated.Value;
  shadowAnimation: Animated.Value;
  card: number;
}) {

  const cardList = [
    <Image
      source={require("../assets/images/card/trinity.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/five.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/five.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/six.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/six.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/eight.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/eight.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/ten.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/ten.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/queen.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/king.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/badjuju.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/ballada.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/ballada.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/death.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/double_dragon.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/fromage_blanc.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/fromage_blanc.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/general.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/makabi.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/makabi.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/miam_time.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/miam_time.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/nine.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/nine.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/samourai.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/samourai.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/shin.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/six_coups.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/six_coups.png")}
      style={styles.image}
    />,
    <Image
      source={require("../assets/images/card/one.png")}
      style={styles.image}
    />,
  ];

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
        {cardList[card]}

      </Animated.View>
    </View>
  );
}

export const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 340,
    resizeMode: "contain",
  },
});
