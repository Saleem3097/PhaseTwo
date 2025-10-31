import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gold from "./Gold";
import Purple from "./Purple";
import Tomato from "./Tomato";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Gold"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Gold" component={Gold} />
      <Stack.Screen name="Purple" component={Purple} />
      <Stack.Screen name="Tomato" component={Tomato} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
