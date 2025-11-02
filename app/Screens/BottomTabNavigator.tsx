import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Gold from "./Gold";
import Purple from "./Purple";
import Tomato from "./Tomato";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#fff", height: 60 },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Gold"
        component={Gold}
        options={{
          tabBarIcon: ({ color = "gold", size }) => (
            <AntDesign name="star" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Purple"
        component={Purple}
        options={{
          tabBarIcon: ({ color = "purple", size }) => (
            <AntDesign name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tomato"
        component={Tomato}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="smile" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
