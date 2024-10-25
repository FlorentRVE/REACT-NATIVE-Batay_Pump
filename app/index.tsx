import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import { Link } from "expo-router";

export default function index() {
  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: "../../assets/images/home.jpeg" }}
        style={{ ...styles.image }}
      />

      <Link href="/game" style={styles.button}>
        <Text style={styles.text}>JOUER</Text>
      </Link>

      <Link href="/rules" style={styles.button}>
        <Text style={styles.text}>REGLES</Text>
      </Link>

      <Text style={styles.credit}>RVE@copyright</Text>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#20282B",
    gap: 30,
    width: width,
    height: height,
  },
  text: {
    fontSize: 30,
    fontFamily: "SpaceMono",
    fontWeight: "bold",
  },
  button: {
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "goldenrod",
    width: 300,
    height: 50,
    borderRadius: 10,
    textAlign: "center",
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
});
