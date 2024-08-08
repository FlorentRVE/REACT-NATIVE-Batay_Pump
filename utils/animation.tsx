import { Animated } from "react-native";

export default class AnimationSpecialEffects {
  private slideAnimation: Animated.Value;
  private fadeAnimation: Animated.Value;
  private shakeAnimation: Animated.Value;
  private shadowAnimation: Animated.Value;

  constructor(
    slideAnimation: Animated.Value,
    fadeAnimation: Animated.Value,
    shakeAnimation: Animated.Value,
    shadowAnimation: Animated.Value
  ) {
    this.slideAnimation = slideAnimation;
    this.fadeAnimation = fadeAnimation;
    this.shakeAnimation = shakeAnimation;
    this.shadowAnimation = shadowAnimation;
  }

  private slideInAnimation() {
    Animated.timing(this.slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  private fadeInAnimation() {
    Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  }

  private startShakeAnimation(delay : number = 300) {
    Animated.sequence([
      Animated.timing(this.shakeAnimation, {
        toValue: 10,
        delay: delay,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(this.shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(this.shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(this.shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  private startShadowAnimation() {
    Animated.sequence([
      Animated.timing(this.shadowAnimation, {
        toValue: 100,
        delay: 300,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(this.shadowAnimation, {
        toValue: 20,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }

  public drawCardAnimation() {
    this.slideInAnimation();
    this.fadeInAnimation();
    this.startShakeAnimation();
    this.startShadowAnimation();
  }

  public lostLifeAnimation() {
    this.startShakeAnimation(0);
  }
}
