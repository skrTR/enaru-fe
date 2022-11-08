import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import { useNavigation } from "@react-navigation/native";

const CourseScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header isBack={true} />
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          marginHorizontal: 10,
          borderRadius: 10,
          marginTop: 10,
          flexDirection: "row",
          width: "95%",
        }}
        onPress={() => navigation.navigate("CourseOne")}
      >
        <Image
          source={require("../../../../assets/enau/lesson1.jpg")}
          style={{
            width: "25%",
            height: 150,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            padding: 5,
            alignItems: "center",
            width: "75%",
          }}
        >
          <Text style={{ fontWeight: "600" }}>АЛТАН ДЭЭД ҮНЭНИЙ АЯЛГУУ</Text>
          <Text style={{ fontWeight: "300" }}>Үндсэн сургалт</Text>

          <View style={{ position: "absolute", bottom: 5, right: 0 }}>
            <Text style={{ fontWeight: "200" }}>📺Үзэх </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          marginHorizontal: 10,
          borderRadius: 10,
          marginTop: 10,
          flexDirection: "row",
          width: "95%",
        }}
        onPress={() => navigation.navigate("CourseTwo")}
      >
        <Image
          source={require("../../../../assets/enau/lesson2.jpg")}
          style={{
            width: "25%",
            height: 150,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            padding: 5,
            alignItems: "center",
            width: "75%",
          }}
        >
          <Text style={{ fontWeight: "600", marginHorizontal: 5 }}>
            ҮНДЭСНИЙ АЖ ТӨРӨХҮЙ-ЭКО БҮТЭЭН БАЙГУУЛАЛТ
          </Text>
          <Text style={{ fontWeight: "300" }}>Бодлогын сургалт</Text>

          <View style={{ position: "absolute", bottom: 5, right: 0 }}>
            <Text style={{ fontWeight: "200" }}>📺Үзэх </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          marginHorizontal: 10,
          borderRadius: 10,
          marginTop: 10,
          flexDirection: "row",
          width: "95%",
        }}
        onPress={() => navigation.navigate("CourseThree")}
      >
        <Image
          source={require("../../../../assets/enau/lesson3.jpg")}
          style={{
            width: "25%",
            height: 150,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            padding: 5,
            alignItems: "center",
            width: "75%",
          }}
        >
          <Text style={{ fontWeight: "600", marginHorizontal: 5 }}>
            ХУДАМ МОНГОЛ БИЧИГ
          </Text>
          <Text style={{ fontWeight: "300" }}>Үнэ цэнийн сургалт</Text>

          <View style={{ position: "absolute", bottom: 5, right: 0 }}>
            <Text style={{ fontWeight: "200" }}>📺Үзэх </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({});
