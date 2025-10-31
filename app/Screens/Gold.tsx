import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Gold = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold</Text>
      <Button
        title="Go to Purple Screen"
        onPress={() => navigation.navigate("Purple")}
      />
    </View>
  );
};

export default Gold;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gold",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 40, textAlign: "center" },
});
