import { View, Text } from "react-native";
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
        <Text>Hello world</Text>
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
