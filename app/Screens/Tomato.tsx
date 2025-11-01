import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

const Tomato = () => {
  const navigation = useNavigation<any>();
  const { name, params } = useRoute<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tomato</Text>
      <Button
        title="Go to Tomato Screen"
        onPress={() => navigation.navigate("Gold")}
      />
      <Text
        onPress={() =>
          navigation.navigate("Gold", { name: "Saleem", title: "baley bealey" })
        }
      >
        Name:Saleem
      </Text>
      <Text
        onPress={() =>
          navigation.navigate("Gold", {
            name: "Bhai",
            title: "Subhan ALlah wah wah",
          })
        }
      >
        Name:Bhai
      </Text>
    </View>
  );
};

export default Tomato;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 40, textAlign: "center" },
});
