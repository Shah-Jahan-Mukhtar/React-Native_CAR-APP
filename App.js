import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Services from "./components/Services";

const SERVICE = ["Services", "Accessories", "Rent Car", "Buy Car"];

// import Icon from "react-native-icons";

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <View style={styles.container}>
        <View
          style={{
            marginTop: "0%",
            height: "50%",
            width: "100%",
            flexDirection: "row",
          }}
        >
          <Ionicons
            style={{ marginTop: "4%", marginLeft: "6%" }}
            name="menu"
            size={32}
            color="white"
          />

          <Ionicons
            style={{ marginTop: "4%", marginLeft: "70%" }}
            name="search"
            size={32}
            color="white"
          />
        </View>
        <View style={{ marginTop: "0%" }}>
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

        <StatusBar style="auto" />
        <View style={{ height: "12%" }}>
          <View>
            <TextInput
              style={{
                width: "90%",
                height: "90%",
                alignContent: "center",
                justifyContent: "center",
                marginLeft: "5%",
                marginTop: "4%",

                borderRadius: 40,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 1,
                justifyContent: "center",
              }}
              placeholder="Search"
            />
            <Ionicons
              name="search"
              size={32}
              color="red"
              style={{ marginTop: "-9%", marginLeft: "82%" }}
            />
          </View>
        </View>
        <View>
          <FlatList
            style={{}}
            data={SERVICE}
            keyExtractor={(item) => item.data}
            renderItem={({ item }) => <Services name={item} />}
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
