import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Tomato = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tomato</Text>
      <Button
        title="Go to Tomato Screen"
        onPress={() => navigation.navigate("Gold")}
      />
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
