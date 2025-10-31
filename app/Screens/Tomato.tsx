import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TomatoScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "tomato",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text style={{ fontSize: 40 }}>TomatoScreen</Text>
    </View>
  );
};

export default TomatoScreen;

const styles = StyleSheet.create({});
