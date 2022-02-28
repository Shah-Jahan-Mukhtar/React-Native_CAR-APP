import { View, Text } from "react-native";
import React from "react";

const FlatlistLyfe = (props) => {
  return (
    <View>
      <Text style={{ color: "white", marginLeft: 10 }}>{props.name}</Text>
    </View>
  );
};

export default FlatlistLyfe;
