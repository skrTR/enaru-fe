import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { AntDesign } from "@expo/vector-icons";
import UserContext from "../../context/UserContex";
import axios from "axios";
import { api } from "../../../Constants";
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
  const state = useContext(UserContext);
  const navigation = useNavigation();
  const logout = () => {
    state.logout();
  };
  const [data, setData] = useState([]);
  const getUserData = () => {
    axios
      .get(`${api}/api/v1/users/${state.userId}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const deleteProfile = () => {
    Alert.alert(
      "Анхаар",
      "Та өөрийн бүртгэлийг устгаснаар та дахиж бүртгүүлж баталгаажуулахаас нааш таны хандах эрх хязгаарлагдмал байхыг анхаарна уу",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            axios
              .delete(`${api}/api/v1/users/${state.userId}`)
              .then((res) => {
                Alert.alert("Амжилтай таны бүртгэл усталаа");
                state.logout();
              })
              .catch((err) => {
                console.log(err.message);
              });
          },
        },
      ]
    );
  };
  useEffect(() => {
    getUserData();
  }, []);
  if (!data) {
    return null;
  }
  return (
    <>
      <Header />
      <ScrollView>
        <Image
          source={require("../../../assets/enau/solologo.png")}
          style={{
            width: 150,
            height: 150,
            alignSelf: "center",
            borderRadius: 250,
            marginTop: 10,
          }}
        />
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
          >
            {data.lastName && data.lastName.slice(0, 1)}. {data.firstName}
          </Text>
          <Text
            style={{ textAlign: "center", fontWeight: "200", fontSize: 14 }}
          >
            {data.type}
          </Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.navigate("CourseScreen")}
          >
            <AntDesign name="book" size={24} color="black" />
            <Text style={{ fontWeight: "500", fontSize: 16, marginLeft: 10 }}>
              Цахим сургалт
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccccc",
              marginVertical: 5,
            }}
          />
          {state.userRole === "admin" && (
            <>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
                onPress={() => navigation.navigate("AddLessonScreen")}
              >
                <AntDesign name="book" size={24} color="black" />
                <Text
                  style={{ fontWeight: "500", fontSize: 16, marginLeft: 10 }}
                >
                  Цахим сургалт нэмэх
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#cccccccc",
                  marginVertical: 5,
                }}
              />
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
                onPress={() => navigation.navigate("UsersScreen")}
              >
                <AntDesign name="user" size={24} color="black" />
                <Text
                  style={{ fontWeight: "500", fontSize: 16, marginLeft: 10 }}
                >
                  Хэрэглэгчид
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#cccccccc",
                  marginVertical: 5,
                }}
              />
            </>
          )}

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
            onPress={deleteProfile}
          >
            <AntDesign name="delete" size={24} color="black" />
            <Text style={{ fontWeight: "500", fontSize: 16, marginLeft: 10 }}>
              Бүртгэл устгах
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccccc",
              marginVertical: 5,
            }}
          />
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
            onPress={logout}
          >
            <AntDesign name="logout" size={24} color="black" />
            <Text style={{ fontWeight: "500", fontSize: 16, marginLeft: 10 }}>
              Бүртгэлээс гарах
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccccc",
              marginVertical: 5,
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
