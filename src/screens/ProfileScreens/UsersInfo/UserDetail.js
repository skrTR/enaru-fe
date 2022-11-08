import {
  StyleSheet,
  Text,
  Switch,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Header from "../../../components/Header";
import axios from "axios";
import { api } from "../../../../Constants";
import { useNavigation } from "@react-navigation/native";
import TypeModal from "./TypeModal";
import RoleModal from "./RoleModal";

const UserDetail = ({ route }) => {
  const { item } = route.params;
  console.log(item);
  const navigation = useNavigation();
  const [phone, setPhone] = useState(item.phone);
  const [lastName, setLastName] = useState(item.lastName ? item.lastName : "");
  const [firstName, setFirstName] = useState(
    item.firstName ? item.firstName : ""
  );
  const [email, setEmail] = useState(item.email ? item.email : "");
  // type modal
  const [type, setType] = useState(item.type ? item.type : "");
  const [modalVisible, setModalVisible] = useState(false);
  // role modal
  const [roleVisible, setRoleVisible] = useState(false);
  const [role, setRole] = useState(item.role ? item.role : "");
  // isVerify
  const [isEnabled, setIsEnabled] = useState(item.isVerify);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const editData = () => {
    axios
      .put(`${api}/api/v1/users/${item._id}`, {
        phone: phone,
        lastName: lastName,
        firstName: firstName,
        email: email,
        type: type,
        isVerify: isEnabled,
        role: role,
      })
      .then((res) => {
        Alert.alert("Амжилтай өөрчлөгдлөө");
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteData = () => {
    Alert.alert(
      "Анхаар",
      `${item.phone} - ${item.firstName} нэртэй хэрэглэгч устгахдаа итгэлтэй байна уу?`,
      [
        {
          text: "Үгүй",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Тийм",
          onPress: () => {
            axios
              .delete(`${api}/api/v1/users/${item._id}`)
              .then((res) => {
                Alert.alert("Амжилтай устлаа");
                navigation.goBack();
              })
              .catch((err) => {
                console.log(err);
              });
          },
        },
      ]
    );
  };
  return (
    <>
      <Header isBack={true} />
      <ScrollView>
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
            marginTop: 3,
          }}
          placeholder={"Утасны дугаар"}
          value={`${phone}`}
          onChangeText={setPhone}
          keyboardType={"number-pad"}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            fontWeight: "600",
            marginHorizontal: 10,
          }}
        >
          овог
        </Text>
        <TextInput
          style={{
            borderRadius: 10,
            marginHorizontal: 10,
            borderWidth: 1,
            borderColor: "#cccccccc",
            padding: 10,
            marginTop: 3,
          }}
          placeholder={"овог"}
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
            marginTop: 3,
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
          И-мэйл
        </Text>
        <TextInput
          style={{
            borderRadius: 10,
            marginHorizontal: 10,
            borderWidth: 1,
            borderColor: "#cccccccc",
            padding: 10,
            marginTop: 3,
          }}
          placeholder={"И-мэйл"}
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
          Гишүүнчлэлийн төрөл
        </Text>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            marginHorizontal: 10,
            borderWidth: 1,
            borderColor: "#cccccccc",
            padding: 10,
            marginTop: 3,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text>{type}</Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            fontWeight: "600",
            marginHorizontal: 10,
          }}
        >
          Гишүүнчлэлийн эрх
        </Text>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            marginHorizontal: 10,
            borderWidth: 1,
            borderColor: "#cccccccc",
            padding: 10,
            marginTop: 3,
          }}
          onPress={() => setRoleVisible(true)}
        >
          <Text>{role}</Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            fontWeight: "600",
            marginHorizontal: 10,
          }}
        >
          Баталгаажсан эсэх
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ margin: 10 }}
          />
          <Text style={{ color: isEnabled ? "green" : "red" }}>
            {isEnabled ? "Баталгаажсан" : "Баталгаажаагүй"}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "#6a1b86",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#cccccccc",
            margin: 10,
          }}
          onPress={editData}
        >
          <Text style={{ color: "white" }}>Хадгалах</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#cccccccc",
            margin: 10,
          }}
          onPress={deleteData}
        >
          <Text style={{ color: "white" }}>Устгах</Text>
        </TouchableOpacity>
      </ScrollView>
      <TypeModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        setType={setType}
      />
      <RoleModal
        setModalVisible={setRoleVisible}
        modalVisible={roleVisible}
        setType={setRole}
      />
    </>
  );
};

export default UserDetail;

const styles = StyleSheet.create({});
