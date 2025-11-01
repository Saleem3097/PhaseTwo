import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

const Gold = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  console.log(route.name);
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold</Text>
      <Button
        title="Go to Purple Screen"
        onPress={() => navigation.navigate("Purple")}
      />
      <Text>Hello, {route.params?.name}</Text>
      <Text>Bol, {route.params?.title}</Text>
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
