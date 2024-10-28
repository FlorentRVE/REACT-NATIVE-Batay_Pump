import { StyleSheet, View, Text, ScrollView } from "react-native";

export default function rules() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.title}>BASE DU JEU</Text>
            <Text style={{ ...styles.text, color: "red" }}>
              Répétitions = Pompes, tractions, flexions etc. C'est selon votre
              envie
            </Text>
            <Text style={styles.text}>
              Piochez une carte et effectuez une série de répétitions
              correspondante au chiffre indiqué sur celle-ci.
            </Text>
            <Text style={{ ...styles.text, color: "lightgreen" }}>
              Exemple : Si vous piochez une carte avec un "5", réalisez 5
              répétitions.
            </Text>
            <Text style={styles.text}>
              Une fois votre série de répétitions terminée, vous pouvez piocher
              une nouvelle carte ou prendre le temps restant pour vous reposer.
            </Text>
            <Text style={styles.text}>
              Si vous ne terminez pas les répétitions avant la fin du
              chronomètre, vous perdez une "vie". Une fois toutes les vies
              perdues, la partie est terminée.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>CARTES SPECIALES</Text>
            <Text style={styles.text}>
              Certaines cartes ont des effets spéciaux indiqués dessus. Si c'est
              votre première carte ignorer l'effet.
            </Text>
            <Text style={{ ...styles.text, color: "lightgreen" }}>
              Exemple : La carte "Double dragon" vous demande de faire le double
              du nombre de répétitions réalisées lors de la carte précédente.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>DUEL</Text>
            <Text style={styles.text}>
              Deux joueurs s'affrontent en piochant des cartes tour à tour. Le
              premier joueur à atteindre zéro point de vie perd la partie.
            </Text>
            <Text style={{ ...styles.text, color: "red" }}>
              Joueur 1 : Ecran noir et joueur 2 : Ecran bleu
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20282B",
    padding: 20,
  },
  content: {
    gap: 40,
  },
  section: {
    gap: 10,
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
