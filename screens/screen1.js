import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import DeprecatedViewStylePropTypes from "react-native/Libraries/DeprecatedPropTypes/DeprecatedViewStylePropTypes";

const Screen1 = () => {
  return (
    <View
      style={{
        flex: 1,

        flexDirection: "row",
      }}
    >
      <ScrollView>
        <View>
          <View
            style={{
              backgroundColor: "#FF8C00",
              width: "45%",

              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/man.png")}
              style={{ width: "80%", height: "20%", marginTop: "-35%" }}
            />
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1.5,
                width: "85%",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "6%",
              }}
            ></View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                HANNAH PARIZARES
              </Text>
              <Text>Environmental Science Researcher</Text>

              <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                SUMMARY{" "}
              </Text>
              <Text
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                Supporting our ecosystem and reversing the effects of climate
                charge are the reasons i get up in the morning.International
                cooperation is neccesary,but i belive it begins with uncovering
                new findings and developing exciting technologies through
                dedication and innovation.
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1.5,
                width: "85%",
                marginTop: "10%",
              }}
            ></View>
            <Text style={{ fontWeight: "bold", marginTop: 10 }}>
              QUALFICATIONS
            </Text>
            <Text style={{ textAlign: "center" }}>
              F.S.c from Govt Zamindar College Gujrat
            </Text>
            <Text style={{ textAlign: "center" }}>
              BS-IT from University Of Gujrat
            </Text>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1.5,
                width: "85%",
                marginTop: "10%",
              }}
            ></View>

            <Text style={{ fontWeight: "bold", marginTop: 10 }}>
              Clubs and Association
            </Text>
            <Text>Dragon Rowing Club </Text>
            <Text>Rower</Text>
            <Text>2022</Text>
            <Text>Writing Help Center </Text>
            <Text>Writing Guide</Text>
            <Text>2022-2023</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
          <View
            style={{
              backgroundColor: "#3D3C3A",
              backfaceVisibility: "visible",
              width: "55%",
            }}
          >
            <Text> Hello</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Screen1;
