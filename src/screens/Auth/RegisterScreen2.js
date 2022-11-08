import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import UserContext from "../../context/UserContex";
import axios from "axios";
import { api } from "../../../Constants";

const RegisterScreen2 = ({ route }) => {
  const { lastName, firstName, phone, password, email } = route?.params;
  const navigation = useNavigation();
  const state = useContext(UserContext);
  const [type, setType] = useState("");

  const signUp = (text) => {
    setType(text);
    Alert.alert("", `Та ${text} ээр бүртгүүлэхдээ итгэлтэй байна уу?`, [
      {
        text: "Үгүй",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Тийм",
        onPress: () => {
          axios
            .post(`${api}/api/v1/users`, {
              phone: phone,
              lastName: lastName,
              email: email,
              firstName: firstName,
              password: password,
              type: type,
              role: "user",
            })
            .then((result) => {
              Alert.alert("Амжилтай бүртгэгдлээ");
              navigation.navigate("AfterSignUp", {
                phones: phone,
                passwords: password,
              });
            })
            .catch((err) => {
              Alert.alert(err.response.data.error.message);
            });
        },
      },
    ]);
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <ImageBackground
        source={require("../../../assets/enau/burtguuleh-head.jpg")}
        style={{
          width: "100%",
          height: 250,
        }}
        imageStyle={{ width: "100%", height: 220 }}
      >
        <AntDesign
          name="left"
          size={30}
          color={"white"}
          style={{ position: "absolute", top: 50, left: 10 }}
          onPress={() => navigation.goBack()}
        />
      </ImageBackground>
      <ScrollView
        style={{
          backgroundColor: "white",
          height: "200%",
          bottom: 100,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <ImageBackground
          source={require("../../../assets/enau/121806400_1601676896679104_7832668711518288116_n.png")}
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
          imageStyle={{ opacity: 0.3 }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Дэмжигч өрх бүл, гишүүн
          </Text>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#6a1b86",
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => signUp("Дэмжигч өрх бүл")}
          >
            <Text style={{ color: "white" }}>Дэмжигч өрх бүл</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#6a1b86",
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => signUp("Дэмжигч гишүүн")}
          >
            <Text style={{ color: "white" }}>Дэмжигч гишүүн</Text>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={require("../../../assets/enau/p7mq3.jpg")}
          style={{
            width: "100%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
          imageStyle={{ opacity: 0.3, resizeMode: "center" }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Бүтээлч өрх бүл, гишүүн
          </Text>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#6a1b86",
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => signUp("Бүтээлч өрх бүл")}
          >
            <Text style={{ color: "white" }}>Бүтээлч өрх бүл</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#6a1b86",
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => signUp("Бүтээлч гишүүн")}
          >
            <Text style={{ color: "white" }}>Бүтээлч гишүүн</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen2;

const styles = StyleSheet.create({});
