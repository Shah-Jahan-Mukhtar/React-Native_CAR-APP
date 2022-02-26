import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Screen1 = () => {
  return (
    <View
      style={{
        flex: 1,

        flexDirection: "row",
      }}
    >
      <View style={{ backgroundColor: "#FF8C00", width: "45%" }}>
        <Image
          source={require("../assets/man.png")}
          style={{ width: "80%", height: "20%", marginTop: "-20%" }}
        />
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: "70%",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "8%",
          }}
        ></View>
        <View>
          <Text style={{ fontSize: 15 }}>HANNAH PARIZARES</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#3D3C3A",
          backfaceVisibility: "visible",
          width: "55%",
        }}
      >
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default Screen1;
