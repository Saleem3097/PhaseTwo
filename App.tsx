import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./app/Screens/MainStackNavigator";
import BottomTabNavigator from "./app/Screens/BottomTabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
