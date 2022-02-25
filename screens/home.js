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
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Services from "../components/Services";
import Screen1 from "./screen1";

import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SERVICE = ["Services", "Accessories", "Rent Car", "Buy Car"];

const Home = ({ navigation }) => {
  const [value1, setValue1] = useState("");

  return (
    <SafeAreaView style={{ marginTop: 0 }}>
      <View>
        <View
          style={{
            height: 200,
            width: "100%",
            backgroundColor: "#9F000F",
            // backgroundGradient: "horizontal ",
            // backgroundGradientTop: "#333333",
            // backgroundGradientBottom: "#666666",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("screen1")}>
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
          <View style={{ marginTop: "7%", height: 100, width: "100%" }}>
            <Image
              source={require("../assets/carPic.jpg")}
              style={{
                height: 190,
                width: "92%",

                marginTop: "0%",
                marginLeft: "4.4%",
                borderRadius: 10,
              }}
            />
          </View>
        </View>

        <StatusBar style="auto" />

        <View style={{ height: 60, marginTop: 70 }}>
          <View>
            <TextInput
              style={{
                width: 325,
                height: 40,
                // alignContent: "center",
                // justifyContent: "center",
                marginLeft: "5%",
                marginTop: 10,
                padding: 10,

                borderRadius: 40,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 1,
                justifyContent: "center",
              }}
              placeholder="Search"
              value={value1}
              onChangeText={setValue1}
              keyboardType="default"
            />

            <Ionicons
              name="search"
              size={32}
              color="red"
              style={{
                marginTop: "-10%",
                marginLeft: "82%",
                height: 50,
                width: "10%",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
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
              <TouchableHighlight onPress={() => {}}>
                <Services name={item} />
              </TouchableHighlight>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View
          style={{
            height: "100%",

            marginTop: "5%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ marginLeft: "5%", fontSize: 17, fontWeight: "bold" }}
            >
              Car Service Catogories
            </Text>
            <TouchableOpacity>
              <Text
                style={{ marginLeft: "40%", fontSize: 17, fontWeight: "bold" }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/sale.png")}
              style={{
                width: "25%",
                height: 80,
                marginTop: 20,
                marginLeft: 20,
              }}
            />

            <Image
              source={require("../assets/classic-car.png")}
              style={{ width: "40%", height: 90, marginTop: 20 }}
            />
            <Image
              source={require("../assets/car.png")}
              style={{ width: "25%", height: 85, marginTop: 20 }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ marginLeft: "3%", fontSize: 13, fontWeight: "bold" }}
            >
              Car Wash Service
            </Text>
            <Text
              style={{ marginLeft: "8%", fontSize: 13, fontWeight: "bold" }}
            >
              AC Repairing
            </Text>
            <Text
              style={{ marginLeft: "8%", fontSize: 13, fontWeight: "bold" }}
            >
              Engine Tuning
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/car2.png")}
              style={{
                width: "25%",
                height: 80,
                marginTop: 20,
                marginLeft: 18,
              }}
            />

            <Image
              source={require("../assets/car3.png")}
              style={{
                width: "30%",
                height: 80,
                marginTop: 20,
                marginLeft: "4%",
              }}
            />
            <Image
              source={require("../assets/guarantee.png")}
              style={{
                width: "18%",
                height: 80,
                marginTop: 20,
                marginLeft: "10%",
              }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ marginLeft: "10%", fontSize: 13, fontWeight: "bold" }}
            >
              Paint Car
            </Text>
            <Text
              style={{ marginLeft: "15%", fontSize: 13, fontWeight: "bold" }}
            >
              Full Tuning
            </Text>
            <Text
              style={{ marginLeft: "14%", fontSize: 13, fontWeight: "bold" }}
            >
              Full Car Wash
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9F000F",
    // alignItems: "center",
    // justifyContent: "center",
    height: "51%",
    // flexDirection: "row",
  },
});

export default Home;
