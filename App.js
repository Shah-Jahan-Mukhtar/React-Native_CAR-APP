import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";

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
          <Image
            source={require("./assets/menu.png")}
            style={{
              marginTop: "8%",
              marginLeft: 20,
              height: "40%",
              width: "12%",
              // flexDirection: "row",
              // display: "flex",
            }}
          />
          <Image
            source={require("./assets/searchIcon.png")}
            style={{
              marginTop: "10%",
              marginLeft: "70%",
              height: "28%",
              width: "8%",
              // flexDirection: "row",
              // display: "flex",
            }}
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
        <View
          style={{
            // marginTop: "%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/searchIcon.png")}
            style={{
              marginLeft: "70%",
              height: "20%",
              width: "10%",
            }}
          />
          <TextInput
            style={{
              width: "90%",
              height: "30%",

              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 1,
              justifyContent: "center",
            }}
            placeholder="Search"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF0000",
    // alignItems: "center",
    // justifyContent: "center",
    height: "51%",
    // flexDirection: "row",
  },
});
