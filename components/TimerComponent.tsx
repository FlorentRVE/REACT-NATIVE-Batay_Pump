import AnimationSpecialEffects from "@/utils/animation";
import React from "react";
import { Animated, Text, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function TimerComponent({
  slideAnimation,
  fadeAnimation,
  key,
  life,
  animationSpecialEffects,
  setLife,
}: {
  slideAnimation: Animated.Value;
  fadeAnimation: Animated.Value;
  key: number;
  life: number;
  animationSpecialEffects: AnimationSpecialEffects;
  setLife: (life: number) => void;
}) {
  
  const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    if (remainingTime === 0) {
      return <Text style={{ fontWeight: "bold" }}>Temps écoulé...</Text>;
    }

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>Temps restant</Text>
        <Text style={{ fontWeight: "bold" }}>{remainingTime}</Text>
        <Text style={{ fontWeight: "bold" }}>secondes</Text>
      </View>
    );
  };

  return (
    <View>
      <Animated.View
        style={{
          transform: [{ scale: slideAnimation }],
          opacity: fadeAnimation,
        }}
      >
        <CountdownCircleTimer
          key={key}
          isPlaying
          duration={5}
          colors={["#0cff59", "#fcde00", "#f98900", "#f92500"]}
          colorsTime={[5, 2, 1, 0]}
          onComplete={() => {
            setLife(life - 1);
            animationSpecialEffects.lostLifeAnimation();
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      </Animated.View>
    </View>
  );
}
