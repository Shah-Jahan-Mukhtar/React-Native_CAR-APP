import { View, Text } from "react-native";
import React from "react";

const Services = (props) => {
  return (
    <View>
      <Text
        style={{ padding: 10, alignItems: "center", justifyContent: "center" }}
      >
        {props.name}
      </Text>
    </View>
  );
};

export default Services;
