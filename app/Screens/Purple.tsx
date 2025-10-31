import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Purple = () => {
  return (
    <View
      style={{
        backgroundColor: "purple",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text style={{ fontSize: 40, textAlign: "center" }}>Purple</Text>
    </View>
  );
};

export default Purple;

const styles = StyleSheet.create({});
