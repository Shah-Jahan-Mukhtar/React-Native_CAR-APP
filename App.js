import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Services from "./components/Services";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const SERVICE = ["Services", "Accessories", "Rent Car", "Buy Car"];

// import Icon from "react-native-icons";

export default function App() {
  const [value1, setValue1] = useState("");
  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <View>
        <View
          style={{ height: "40%", width: "100%", backgroundColor: "#9F000F" }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                style={{ marginTop: "10%", marginLeft: "10%" }}
                name="menu"
                size={32}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                style={{ marginTop: "4%", marginLeft: "80%" }}
                name="search"
                size={32}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: "7%", height: "100%", width: "100%" }}>
            <Image
              source={require("./assets/carPic.jpg")}
              style={{
                height: "100%",
                width: "92%",

                marginTop: "0%",
                marginLeft: "4.4%",
                borderRadius: 10,
              }}
            />
          </View>
        </View>
        <StatusBar style="auto" />

        <View style={{ height: "20%", marginTop: "20%" }}>
          <View>
            <TextInput
              style={{
                width: "90%",
                height: "30%",
                // alignContent: "center",
                // justifyContent: "center",
                marginLeft: "5%",
                marginTop: "6%",
                padding: 10,

                borderRadius: 40,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 1,
                justifyContent: "center",
              }}
              placeholder="Search"
              value={value1}
              onChangeText={setValue1}
              keyboardType="default"
            />
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="search"
                size={32}
                color="red"
                style={{
                  marginTop: "-9%",
                  marginLeft: "82%",
                  height: "120%",
                  width: "10%",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <FlatList
            style={{
              marginTop: "5%",
              backgroundColor: "#F62817",
              borderRadius: 15,
            }}
            data={SERVICE}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable onPress={}
                style={({ pressed }) => {
                  backgroundColor: pressed ? "black" : "white";
                }}
              >
                {({ pressed }) => (
                  <Services
                    name={item}
                    style={{ color: pressed ? "white" : "black" }}
                  />
                )}
              </Pressable>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9F000F",
    // alignItems: "center",
    // justifyContent: "center",
    height: "51%",
    // flexDirection: "row",
  },
});
