import BoutonComponent from "@/components/BoutonComponent";
import TimerComponent from "@/components/TimerComponent";
import { useRef, useState } from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";
import AnimationSpecialEffects from "../utils/animation";
import LifeComponent from "@/components/LifeComponent";
import GameOverComponent from "@/components/GameOverComponent";
import CardDisplayComponent from "@/components/CardDisplayComponent";
import { cardList } from "../utils/cardList";
import { LinearGradient } from "expo-linear-gradient";

export default function game() {
  const [card, setCard] = useState("../../assets/images/get_ready.png");
  const [life, setLife] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0); //UTILISE PAR LE TIMER

  // DEFINITION DES VALEURS DE BASE DES ANIMATIONS
  const slideAnimation = useRef(new Animated.Value(1)).current;
  const fadeAnimation = useRef(new Animated.Value(1)).current;
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const shadowAnimation = useRef(new Animated.Value(0)).current;

  // OBJET CONTENANT TOUTES LES FONCTIONS D'ANIMATION
  const animationSpecialEffects = new AnimationSpecialEffects(
    slideAnimation,
    fadeAnimation,
    shakeAnimation,
    shadowAnimation
  );

  // PIOCHER UNE CARTE
  const drawCard = () => {
    setIsPlaying(true);

    let randomNumber = Math.floor(Math.random() * cardList.length);
    setCard(`../../assets/images/card/${cardList[randomNumber]}.png`);

    slideAnimation.setValue(20);
    fadeAnimation.setValue(0);
    shakeAnimation.setValue(0);
    shadowAnimation.setValue(0);
    animationSpecialEffects.drawCardAnimation();

    setKey((prevKey) => prevKey + 1); //RESET LE TIMER
  };

  return (
    <LinearGradient colors={["#0E1215", "#000000"]} style={styles.background}>
      <View style={styles.container}>
        <LifeComponent life={life} />

        <TimerComponent
          slideAnimation={slideAnimation}
          fadeAnimation={fadeAnimation}
          keyTimer={key}
          setLife={setLife}
          animationSpecialEffects={animationSpecialEffects}
          isPlayingTimer={isPlaying}
          life={life}
        />

        <CardDisplayComponent
          slideAnimation={slideAnimation}
          fadeAnimation={fadeAnimation}
          shadowAnimation={shadowAnimation}
          card={card}
        />

        {life < 1 ? (
          <GameOverComponent setLife={setLife} drawCard={drawCard} />
        ) : (
          <BoutonComponent
            shakeAnimation={shakeAnimation}
            drawCard={drawCard}
          />
        )}
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
    padding: 10,
    gap: 10,
    width: width,
    height: height,
  },

  background: {
    flex: 1,
  },
});
