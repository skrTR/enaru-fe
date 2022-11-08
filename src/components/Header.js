import { StyleSheet, Image, View, Text, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import UserContext from "../context/UserContex";
import axios from "axios";
import { api } from "../../Constants";
const Header = ({ isBack }) => {
  const navigation = useNavigation();
  const insents = useSafeAreaInsets();
  const state = useContext(UserContext);
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const getData = () => {
    axios
      .get(`${api}/api/v1/users/${state.userId}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        let message = err.response.data.error.message;
        if (message === `${state.userId} ID-тэй хэрэглэгч байхгүй!`) {
          state.logout();
          Alert.alert("Алдаа гарлаа. Таны бүртгэл устасан байна");
        } else if (
          message ===
          "Энэ үйлдлийг хийхэд таны эрх хүрэхгүй байна. Та эхлээд логин хийнэ үү. Authorization header-ээр эсвэ Cookie ашиглан токеноо дамжуулна уу."
        ) {
          state.logout();
          Alert.alert(
            "Таны хандах эрхийн хугацаа дууссан байна. Дахин нэвтрэж орно уу"
          );
        }
      });
  };
  useEffect(() => {
    if (state.isLoggedIn) {
      getData();
    }
  }, []);
  return (
    <>
      <View
        style={{
          marginHorizontal: 10,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginTop: insents.top,
          height: 50,
        }}
      >
        {isBack ? (
          <AntDesign
            name="left"
            size={30}
            onPress={() => navigation.goBack()}
          />
        ) : (
          <Image
            style={{ resizeMode: "contain", width: 60, height: 50 }}
            source={require("../../assets/enau/solologo.png")}
          />
        )}
        {state.isLoggedIn ? (
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "400" }}>
              {data.lastName && `${data.lastName.slice(0, 1)}.`}{" "}
              {data.firstName ? data.firstName : "Тавтай морил"}
            </Text>
            <Text style={{ fontWeight: "100" }}>
              {data.type ? data.type : "Инару нэгдэл"}
            </Text>
          </View>
        ) : (
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "400" }}>{"Тавтай морил"}</Text>
            <Text style={{ fontWeight: "100" }}>{"Инару нэгдэл"}</Text>
          </View>
        )}
      </View>
      <View style={{ borderWidth: 1, borderColor: "#cccccccc" }} />
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
