import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header />
      {/* Нэгдэл боловсрол */}
      <View style={{ flexDirection: "row", margin: 10, width: "100%" }}>
        {/* Нэгдэл */}
        <TouchableOpacity
          onPress={() => navigation.navigate("CombinationScreen")}
        >
          <ImageBackground
            source={require("../../../assets/team1.jpg")}
            style={{
              width: 190,
              height: 190,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            imageStyle={{ opacity: 0.4, borderRadius: 10 }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>Нэгдэл</Text>
          </ImageBackground>
        </TouchableOpacity>
        {/* Боловсрол */}
        <TouchableOpacity
          onPress={() => navigation.navigate("EducationScreen")}
        >
          <ImageBackground
            source={require("../../../assets/enau/lesson1.jpg")}
            style={{
              width: 190,
              height: 190,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            imageStyle={{ opacity: 0.4, borderRadius: 10 }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>Боловсрол</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      {/* Төсөл кластер */}
      <View style={{ flexDirection: "row", margin: 10, width: "100%" }}>
        {/* Төсөл */}
        <TouchableOpacity onPress={() => navigation.navigate("ProjectScreen")}>
          <ImageBackground
            source={require("../../../assets/project1.jpg")}
            style={{
              width: 190,
              height: 190,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            imageStyle={{ opacity: 0.4, borderRadius: 10 }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>Төсөл</Text>
          </ImageBackground>
        </TouchableOpacity>
        {/* Кластер */}
        <TouchableOpacity onPress={() => navigation.navigate("ClusterScreen")}>
          <ImageBackground
            source={require("../../../assets/klaster.png")}
            style={{
              width: 190,
              height: 190,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            imageStyle={{ opacity: 0.4, borderRadius: 10 }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>Кластер</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      {/* Гишүүнчлэл */}
      <TouchableOpacity
        style={{ margin: 10 }}
        onPress={() => navigation.navigate("TeamScreen")}
      >
        <ImageBackground
          source={require("../../../assets//teams.jpg")}
          style={{
            width: "100%",
            height: 190,
            alignItems: "center",
            justifyContent: "center",
          }}
          imageStyle={{ opacity: 0.5, borderRadius: 10 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Гишүүнчлэл</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
