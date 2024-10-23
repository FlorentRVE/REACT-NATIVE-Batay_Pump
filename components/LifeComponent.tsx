import { StyleSheet, FlatList, Image, Platform, Pressable, Text } from "react-native";

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
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Text key={index} style={{ fontSize: 35 } }>{item}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
