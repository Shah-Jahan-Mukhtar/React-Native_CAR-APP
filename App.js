import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {} from "react-native";

import Services from "./components/Services";
import Screen1 from "./screens/screen1";
import Home from "./screens/home";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// import Icon from "react-native-icons";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen style={{ color: "red" }} name="Home" component={Home} />
        <Stack.Screen name="screen1" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
