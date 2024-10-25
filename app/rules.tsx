import { StyleSheet, View, Animated, Dimensions, Text, ScrollView } from "react-native";

export default function rules() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>BASE DU JEU</Text>
        <Text style={styles.text}>
          Piochez une carte et effectuez une série de répétitions correspondante
          au nombre sur la carte.
        </Text>
        <Text style={{ ...styles.text, color: "lightgreen" }}>
          Exemple : Je pioche une carte avec un 5. J'effectue une série de 5
          répétitions.
        </Text>
        <Text style={styles.text}>
          Une fois le nombre de répétitions terminés, piochez une nouvelle carte
          ou profitez du reste du temps disponible.
        </Text>
        <Text style={styles.text}>
          Si le nombres de répétitions n'est pas effectué avant la fin du chronométre,
          une vie est perdue. Au bout de 3 vies, le jeu est fini.
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>CARTES SPECIALES</Text>
        <Text style={styles.text}>
          Certaine cartes ont un effet spécial indiqué sur celle-ci. Si c'est votre première carte ignorer l'effet.
        </Text>
        <Text style={{ ...styles.text, color: "lightgreen" }}>
          Double dragon:
        </Text>
        <Text style={{ ...styles.text }}>
          Effectuez le nombres de répétitions effectuées précédement multiplié
          par 2.
        </Text>
        <Text style={{ ...styles.text, color: "lightgreen" }}>Trinity:</Text>
        <Text style={{ ...styles.text }}>
          Effectuez le nombres de répétitions effectuées précédement multiplié
          par 3.
        </Text>
        <Text style={{ ...styles.text, color: "lightgreen" }}>Shin:</Text>
        <Text style={{ ...styles.text }}>
          Le timer est réduit de moitié.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20282B",
    padding: 20,
    gap: 50,
  },
  textContainer: {
    flex: 1,
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "SpaceMono",
    fontWeight: "bold",
    color: "goldenrod",
  },
  text: {
    fontSize: 14,
    fontFamily: "SpaceMono",
    color: "white",
  },
});
