import BoutonComponent from "@/components/BoutonComponent";
import TimerComponent from "@/components/TimerComponent";
import { useRef, useState } from "react";
import { StyleSheet, View, Animated } from "react-native";
import AnimationSpecialEffects from "../../utils/animation";
import LifeComponent from "@/components/LifeComponent";
import GameOverComponent from "@/components/GameOverComponent";
import CardDisplayComponent from "@/components/CardDisplayComponent";
import {cardList} from "../../utils/cardList";

export default function index() {

  const [card, setCard] = useState("");
  const [life, setLife] = useState(3);
  const [key, setKey] = useState(0); //UTILISE PAR LE TIMER

  // DEFINITION DES VALEURS DE BASE DES ANIMATIONS
  const slideAnimation = useRef(new Animated.Value(20)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
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
      style={{ ...styles.container, transform: [{ translateX: shakeAnimation }] }}
    >
      <TimerComponent
        slideAnimation={slideAnimation}
        fadeAnimation={fadeAnimation}
        key={key}
        setLife={setLife}
        animationSpecialEffects={animationSpecialEffects}
        life={life}
      />

      <Animated.Text
        style={{ ...styles.title, transform: [{ translateX: shakeAnimation }] }}
      >
        🔥Fit Fighter🔥
      </Animated.Text>

      <CardDisplayComponent
        slideAnimation={slideAnimation}
        fadeAnimation={fadeAnimation}
        shadowAnimation={shadowAnimation}
        card={card}
      />

      {life < 1 ? (
        <GameOverComponent
          setLife={setLife}
          drawCard={drawCard}
        />
      ) : (
        <View style={styles.container}>
          <BoutonComponent shakeAnimation={shakeAnimation} drawCard={drawCard} />
          <LifeComponent life={life} />
        </View>
      )}
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
    padding: 10,
  },
  title: {
    fontSize: 40,
    fontFamily: "PixelifySans",
  },
  buttonLife: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
