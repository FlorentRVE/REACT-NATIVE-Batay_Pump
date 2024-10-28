import { FlatList, Platform, Text } from "react-native";

export default function LifeComponent({life} : {life:number}) {

  const lifeDisplay :Array<string> = [];
  for (let i = 0; i < life; i++) {
    lifeDisplay.push("❤️");
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={lifeDisplay}
      // contentContainerStyle={{}}
      renderItem={({ item, index }) => (
        <Text key={index} style={{ fontSize: 30 } }>{item}</Text>
      )}
    />
  );
}
