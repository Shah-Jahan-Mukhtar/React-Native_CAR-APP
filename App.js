import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {} from "react-native";

import Services from "./components/Services";
import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// import Icon from "react-native-icons";

export default function App() {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen1" component={Screen1} />
    </Stack.Navigator>
  </NavigationContainer>;

  return <Screen2 />;
}
