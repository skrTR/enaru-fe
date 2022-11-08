import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../context/UserContex";

const AfterSignUp = (props) => {
  const { phones, passwords } = props.route?.params;
  const navigation = useNavigation();
  const state = useContext(UserContext);
  const [phone, setPhone] = useState(phones ? phones : "");
  const [password, setPassword] = useState(passwords ? passwords : "");
  const login = () => {
    state.login(phone, password);
  };
  return (
    <View style={{ backgroundColor: "white" }}>
      <ImageBackground
        source={require("../../../assets/enau/burtguuleh-head.jpg")}
        style={{
          width: "100%",
          height: 220,
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
        }}
        imageStyle={{ width: "100%", height: 220 }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            top: 70,
            fontWeight: "bold",
          }}
        >
          Нэвтрэх
        </Text>
      </ImageBackground>
      <ScrollView
        style={{
          backgroundColor: "white",
          height: "200%",
          // bottom: 50,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          top: 150,
        }}
      >
        {/* Login */}
        <View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Утасны дугаар
          </Text>
          <TextInput
            style={{
              borderRadius: 10,
              marginHorizontal: 10,
              borderWidth: 1,
              borderColor: "#cccccccc",
              padding: 10,
              marginTop: 10,
            }}
            placeholder={"Утасны дугаар"}
            value={phone}
            onChangeText={setPhone}
            keyboardType={"number-pad"}
          />
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Нууц үг
          </Text>
          <TextInput
            style={{
              borderRadius: 10,
              marginHorizontal: 10,
              borderWidth: 1,
              borderColor: "#cccccccc",
              padding: 10,
              marginTop: 10,
            }}
            placeholder={"Нууц үг"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            borderWidth: 1,
            borderColor: "#cccccccc",
            marginHorizontal: 10,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#6a1b86",
          }}
          onPress={login}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Нэвтрэх</Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "500",
            fontSize: 15,
            marginVertical: 15,
          }}
        >
          Хэрэв танд бүртгэл байхгүй бол
        </Text>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#cccccccc",
            marginHorizontal: 10,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#6a1b86",
          }}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Бүртгүүлэх</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AfterSignUp;

const styles = StyleSheet.create({});
