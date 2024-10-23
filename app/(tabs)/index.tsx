import BoutonComponent from "@/components/BoutonComponent";
import TimerComponent from "@/components/TimerComponent";
import { useRef, useState } from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";
import AnimationSpecialEffects from "../../utils/animation";
import LifeComponent from "@/components/LifeComponent";
import GameOverComponent from "@/components/GameOverComponent";
import CardDisplayComponent from "@/components/CardDisplayComponent";
import {cardList} from "../../utils/cardList";

export default function index() {

  const [card, setCard] = useState(
    "../../assets/images/card/joker.png"
  );
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
    <View
      style={styles.container}
    >
      <TimerComponent
        slideAnimation={slideAnimation}
        fadeAnimation={fadeAnimation}
        keyTimer={key}
        setLife={setLife}
        animationSpecialEffects={animationSpecialEffects}
        isPlayingTimer={isPlaying}
        life={life}
      />

      {/* <Animated.Text
        style={{ ...styles.title }}
      >
        🔥Batay Pump🔥
      </Animated.Text> */}
      <LifeComponent life={life} />

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
  );
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
    padding: 10,
    gap: 10,
    width: width,
    height: height,
  },
  // title: {
  //   fontSize: 30,
  //   fontFamily: "PixelifySans",
  // },
});
