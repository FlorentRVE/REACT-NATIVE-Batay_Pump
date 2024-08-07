import { useEffect, useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  Animated,
  ScrollView,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function demo() {
  const [card, onChangeCard] = useState(`../../assets/images/card/ace.png`);
  const cardList = [
    "two",
    "three",
    "five",
    "six",
    "eight",
    "ten",
    "queen",
    "king",
    "jack",
    "ace",
    "joker",
  ];

  const slideAnim = useRef(new Animated.Value(20)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const shakeAnime = useRef(new Animated.Value(0)).current;
  const shadowAnim = useRef(new Animated.Value(0)).current;

  const [key, setKey] = useState(0);

  const renderTime = ({ remainingTime } : { remainingTime: number }) => {
    if (remainingTime === 0) {
      return <Text style={{ fontWeight: "bold" }}>Temps écoulé...</Text>;
    }

    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontWeight: "bold"}}>Temps restant</Text>
        <Text style={{fontWeight: "bold"}}>{remainingTime}</Text>
        <Text style={{fontWeight: "bold"}}>secondes</Text>
      </View>
    );
  };

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  };

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnime, {
        toValue: 10,
        delay: 300,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnime, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnime, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnime, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const startShadow = () => {
    Animated.sequence([
      Animated.timing(shadowAnim, {
        toValue: 100,
        delay: 300,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(shadowAnim, {
        toValue: 20,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const randomCard = () => {
    let randomDice = Math.floor(Math.random() * cardList.length);
    onChangeCard(`../../assets/images/card/${cardList[randomDice]}.png`);
    slideAnim.setValue(20);
    fadeAnim.setValue(0);
    shakeAnime.setValue(0);
    slideIn();
    fadeIn();
    startShake();
    startShadow();
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <View
      style={{ ...styles.container, transform: [{ translateX: shakeAnime }] }}
    >
      {/* ======== COMPTE A REBOURS  ========== */}
      <Animated.View
        style={{
          transform: [{ scale: slideAnim }],
          opacity: fadeAnim,
        }}
      >
        <CountdownCircleTimer
          key={key}
          isPlaying
          duration={30}
          colors={["#0cff59", "#fcde00", "#f98900", "#f92500"]}
          colorsTime={[15, 10, 5, 0]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </Animated.View>

      {/* =========== TITRE DU JEU =========== */}
      <Animated.Text
        style={{ ...styles.title, transform: [{ translateX: shakeAnime }] }}
      >
        🔥Fit Fighter🔥
      </Animated.Text>

      {/* =============== CARTE ================ */}
      <Animated.View
        style={{
          transform: [{ scale: slideAnim }],
          opacity: fadeAnim,
          shadowRadius: shadowAnim,
          shadowOpacity: 0.85,
        }}
      >
        <Animated.Image source={{ uri: card }} style={{ ...styles.image }} />
      </Animated.View>

      {/* =============== BOUTON ===================== */}
      <Animated.View style={{ transform: [{ translateX: shakeAnime }] }}>
        <Pressable style={styles.bouton} onPress={randomCard}>
          <Text style={styles.text}>Tirer une carte</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    backgroundColor: "skyblue",
  },
  title: {
    fontSize: 40,
    fontFamily: "PixelifySans",
  },
  text: {
    fontSize: 28,
    fontFamily: "SpaceMono",
    fontWeight: "bold",
  },
  image: {
    width: 220,
    height: 340,
    borderRadius: 18,
    resizeMode: "contain",
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
