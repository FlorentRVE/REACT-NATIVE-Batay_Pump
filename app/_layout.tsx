import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PixelifySans: require("../assets/fonts/PixelifySans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>

      <Stack.Screen
        name="index"
        options={{ headerShown: false, headerLeft: () => <></> }}
      />

      <Stack.Screen
        name="rules"
        options={{
          headerTitle: "REGLES",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 800,
            fontFamily: "PixelifySans",
          },
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "goldenrod",
        }}
      />

      <Stack.Screen
        name="game"
        options={{
          headerTitle: "BATAY PUMP",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 800,
            fontFamily: "PixelifySans",
          },
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "goldenrod",
        }}
      />

      <Stack.Screen name="+not-found" />
      
    </Stack>
  );
}
