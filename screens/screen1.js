import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Overlay,
  Flatlist,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import DeprecatedViewStylePropTypes from "react-native/Libraries/DeprecatedPropTypes/DeprecatedViewStylePropTypes";

const Screen1 = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#FF8C00",
            width: "45%",

            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/man.png")}
            style={{ width: "80%", height: "20%", marginTop: "-15%" }}
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

            <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 18 }}>
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
          <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 18 }}>
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

          <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 18 }}>
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

            width: "55%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="location"
              size={32}
              color="#FF8C00"
              style={{ marginTop: 12 }}
            />
            <Text style={{ marginLeft: 0, marginTop: 18, color: "white" }}>
              8001 lida Lane,Monsell,NY
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="call"
              size={32}
              color="#FF8C00"
              style={{ marginTop: 12 }}
            />
            <Text style={{ marginLeft: 0, marginTop: 18, color: "white" }}>
              1-905-509-5900
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="mail"
              size={32}
              color="#FF8C00"
              style={{ marginTop: 12 }}
            />
            <Text style={{ marginLeft: 0, marginTop: 18, color: "white" }}>
              afournier@uwaterloo.com
            </Text>
          </View>
          <View
            style={{
              marginLeft: 5,
              borderBottomColor: "#FF8C00",
              borderBottomWidth: 1.5,
            }}
          ></View>
          <View>
            <Text
              style={{
                color: "#FF8C00",
                fontWeight: "bold",
                fontSize: 18,

                marginTop: 10,
                marginLeft: 10,
              }}
            >
              EDUCATION
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              UNIVERSITY OF WATERLOO
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            >
              2020-2024
            </Text>
            <Text
              style={{
                color: "white",
                marginLeft: 10,
                marginTop: 10,
                fontStyle: "italic",
              }}
            >
              Bachelor of Science,Environmental Science Specialist
            </Text>
          </View>
          <View
            style={{
              marginLeft: 5,
              borderBottomColor: "#FF8C00",
              borderBottomWidth: 1.5,
              marginTop: 10,
            }}
          ></View>
          <View>
            <Text
              style={{
                color: "#FF8C00",
                fontWeight: "bold",
                fontSize: 18,

                marginTop: 10,
                marginLeft: 10,
              }}
            >
              CO-OP PLACEMENT EXPERIENCE
            </Text>

            <Text
              style={{ color: "white", marginLeft: 10, fontWeight: "bold" }}
            >
              Life science Co-op
            </Text>
            <Text
              style={{ color: "white", marginLeft: 10, fontStyle: "italic" }}
            >
              2022 Lab Technician
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Screen1;
