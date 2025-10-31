import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Gold = () => {
  return (
    <View
      style={{
        backgroundColor: "gold",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text style={{ fontSize: 40, textAlign: "center" }}>Gold</Text>
    </View>
  );
};

export default Gold;

const Styles = StyleSheet.create({});
