import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [lastName, setLastName] = useState("test");
  const [firstName, setFirstName] = useState("test");
  const [phone, setPhone] = useState("11311010");
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456");
  const [password1, setPassword1] = useState("123456");
  return (
    <KeyboardAwareScrollView>
      <View style={{ backgroundColor: "white" }}>
        <ImageBackground
          source={require("../../../assets/enau/burtguuleh-head.jpg")}
          style={{
            width: "100%",
            height: 250,
          }}
          imageStyle={{ width: "100%", height: 220, opacity: 0.4 }}
        >
          <AntDesign
            name="left"
            size={30}
            color={"black"}
            style={{ position: "absolute", top: 50, left: 10 }}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              top: 70,
              fontWeight: "bold",
            }}
          >
            Бүртгүүлэх
          </Text>
        </ImageBackground>
        <ScrollView
          style={{
            backgroundColor: "white",
            height: "200%",
            bottom: 50,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          {/* Login */}
          <View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: "600",
                marginHorizontal: 10,
              }}
            >
              Овог
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
              placeholder={"Овог"}
              value={lastName}
              onChangeText={setLastName}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: "600",
                marginHorizontal: 10,
              }}
            >
              Нэр
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
              placeholder={"Нэр"}
              value={firstName}
              onChangeText={setFirstName}
            />
            <Text
              style={{
                marginTop: 10,
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
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: "600",
                marginHorizontal: 10,
              }}
            >
              И-мэйл хаяг
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
              placeholder={"И-мэйл хаяг"}
              value={email}
              onChangeText={setEmail}
            />
            <Text
              style={{
                marginTop: 10,
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
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: "600",
                marginHorizontal: 10,
              }}
            >
              Нууц үг давтах
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
              placeholder={"Нууц үг давтах"}
              value={password1}
              onChangeText={setPassword1}
            />
          </View>

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
              marginTop: 20,
            }}
            onPress={() =>
              navigation.navigate("RegisterScreen2", {
                lastName,
                firstName,
                phone,
                password,
                email,
              })
            }
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Бүртгүүлэх
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
