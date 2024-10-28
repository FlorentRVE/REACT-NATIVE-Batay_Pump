import { StyleSheet, View, Animated, Dimensions, Text } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useRef } from "react";

export default function index() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  };

  fadeIn();

  return (
    <LinearGradient colors={["#0E1215", "#000000"]} style={styles.background}>
      <View style={styles.container}>
        <Animated.Image
          source={{ uri: "../../assets/images/home_3.png" }}
          style={{ ...styles.image, opacity: fadeAnimation }}
        />

        <Link href="/game">
          <View style={styles.button}>
            <Text style={styles.text}>Solo</Text>
          </View>
        </Link>

        <Link href="/game">
          <View style={styles.button}>
            <Text style={styles.text}>Duel</Text>
          </View>
        </Link>

        <Link href="/rules">
          <View style={styles.button}>
            <Text style={styles.text}>Règles</Text>
          </View>
        </Link>

        <Text style={styles.credit}>RVE@copyright</Text>
      </View>
    </LinearGradient>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: width,
    height: height,
  },
  text: {
    fontSize: 25,
    fontFamily: "SpaceMono",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  button: {
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "goldenrod",
    width: 300,
    height: 40,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width,
    height: height / 1.8,
  },
  credit: {
    fontSize: 15,
    color: "goldenrod",
    position: "absolute",
    bottom: 20,
  },
  background: {
    flex: 1,
  },
});
