import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Purple = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Purple</Text>
      <Button
        title="Go to Tomato Screen"
        onPress={() => navigation.navigate("Tomato")}
      />
    </View>
  );
};

export default Purple;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 40, textAlign: "center", color: "white" },
});
