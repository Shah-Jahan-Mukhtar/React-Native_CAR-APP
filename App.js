import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
// import Icon from "react-native-icons";

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <View style={styles.container}>
        <Image
          source={require("./assets/menu.png")}
          style={{ marginTop: 20, marginLeft: 20, height: 40, width: 40 }}
        />
        <Image
          source={require("./assets/searchIcon.png")}
          style={{
            marginTop: "0%",
            marginLeft: "70%",
            height: "15%",
            width: "8%",
          }}
        />
        <Image
          source={require("./assets/carPic.jpg")}
          style={{ height: "80%", width: "80%", marginTop: "0%" }}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF0000",
    // alignItems: "center",
    // justifyContent: "center",
    height: 200,
    flexDirection: "column",
    display: "flex",
  },
});
