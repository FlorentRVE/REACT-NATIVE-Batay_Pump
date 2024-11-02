import BoutonComponent from "@/components/BoutonComponent";
import { useRef, useState } from "react";
import { StyleSheet, View, Animated, Dimensions, Text } from "react-native";
import AnimationSpecialEffects from "../utils/animation";
import LifeComponent from "@/components/LifeComponent";
import CardDisplayComponent from "@/components/CardDisplayComponent";
import { cardList } from "../utils/cardList";
import { LinearGradient } from "expo-linear-gradient";
import GameOverComponentDuel from "@/components/GameOverComponentDuel";
import TimerComponent from "@/components/TimerComponent";

export default function gameDuel() {
  const [card, setCard] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [round, setRound] = useState(0);
  const [key, setKey] = useState(0); //UTILISE PAR LE TIMER

  // VARIABLE POUR LES DEUX JOUEURS
  const [isPlayingTwo, setIsPlayingTwo] = useState(false);
  const [life, setLife] = useState(3);
  const [lifePlayerTwo, setLifePlayerTwo] = useState(3);

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
    setCard(randomNumber);

    slideAnimation.setValue(20);
    fadeAnimation.setValue(0);
    shakeAnimation.setValue(0);
    shadowAnimation.setValue(0);
    animationSpecialEffects.drawCardAnimation();

    setRound((prevRound) => prevRound + 1);
    setIsPlayingTwo(!isPlayingTwo);
    setKey((prevKey) => prevKey + 1); //RESET LE TIMER
  };

  return (
    <LinearGradient
      colors={isPlayingTwo ? ["#0E1215", "blue"] : ["#0E1215", "#000000"]}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.roundLifeContainer}>

          {isPlayingTwo ? (
            <Text style={styles.round}>Joueur 2</Text>
          ) : (
            <Text style={styles.round}>Joueur 1</Text>
          )}

          {isPlayingTwo ? (
            <View>
              {life > 0 ? (
                <LifeComponent life={life} />
              ) : (
                <Text
                  style={{ fontSize: 18, color: "red", fontWeight: "bold" }}
                >
                  Plus aucune vie
                </Text>
              )}
            </View>
          ) : (
            <View>
              {lifePlayerTwo > 0 ? (
                <LifeComponent life={lifePlayerTwo} />
              ) : (
                <Text
                  style={{ fontSize: 18, color: "red", fontWeight: "bold" }}
                >
                  Plus aucune vie
                </Text>
              )}
            </View>
          )}
        </View>

        <TimerComponent
          slideAnimation={slideAnimation}
          fadeAnimation={fadeAnimation}
          keyTimer={key}
          setLife={isPlayingTwo ? setLife : setLifePlayerTwo}
          animationSpecialEffects={animationSpecialEffects}
          isPlayingTimer={isPlaying}
          life={isPlayingTwo ? life : lifePlayerTwo}
        />

        <CardDisplayComponent
          slideAnimation={slideAnimation}
          fadeAnimation={fadeAnimation}
          shadowAnimation={shadowAnimation}
          card={card}
        />

        {life < 1 || lifePlayerTwo < 1 ? (
          <GameOverComponentDuel
            setLife={setLife}
            setLifePlayerTwo={setLifePlayerTwo}
            drawCard={drawCard}
            setround={setRound}
          />
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
  roundLifeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: width,
  },
  round: {
    fontWeight: "bold",
    fontSize: 18,
    color: "goldenrod",
  },
});
