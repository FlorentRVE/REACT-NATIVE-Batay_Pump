import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

export default function index() {
  return (
    <View style={styles.container}>
      {/* <Animated.Text style={{ ...styles.title }}>🔥Batay Pump🔥</Animated.Text> */}
      <Animated.Image
        source={{ uri: "../../assets/images/home.jpeg" }}
        style={{ ...styles.image }}
      />
      <Pressable style={styles.button}>
        <Link href="/game">
          <Text style={styles.text}>JOUER</Text>
        </Link>
      </Pressable>

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
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    backgroundColor: "goldenrod",
    width: 300,
    height: 50,
    borderRadius: 10,
  },
  image: {
    width: width,
    height: height / 2,
    // resizeMode: "contain",
  },
  credit : {
    fontSize: 15,
    color: "goldenrod",
    position: "absolute",
    bottom: 20
  }
});
