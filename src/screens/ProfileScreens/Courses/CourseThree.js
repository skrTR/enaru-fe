import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../../components/Header";
import axios from "axios";
import { api } from "../../../../Constants";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import UserContext from "../../../context/UserContex";
const CourseThree = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(false);
  const isFocused = useIsFocused();
  const state = useContext(UserContext);
  const getData = () => {
    axios
      .get(`${api}/api/v1/courses?limit=1000&category=3`)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    setRefresh(false);
    getData();
  }, [refresh, isFocused]);
  const deleteCourse = (id, title) => {
    Alert.alert("Анхаар", `${title} тай сургалт устгахдаа итгэлтэй байна уу?`, [
      {
        text: "Үгүй",
        style: "cancel",
      },
      {
        text: "Тийм",
        onPress: () => {
          axios
            .delete(`${api}/api/v1/courses/${id}`)
            .then((res) => {
              Alert.alert("Амжилтай усталаа");
              setRefresh(true);
            })
            .catch((err) => {
              console.log(err.message);
            });
        },
      },
    ]);
  };
  return (
    <View>
      <Header isBack={true} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                marginHorizontal: 10,
                marginTop: 10,
                backgroundColor: item.isRead ? "#cccccccc" : "#6a1b86",
                borderRadius: 10,
                padding: 5,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.navigate("Lessons", { id: item._id });
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                >
                  {item.number}. {item.title}
                </Text>
                <Text
                  style={{ color: "white", fontWeight: "300", fontSize: 14 }}
                >
                  Тайлбар: {item.description}
                </Text>
              </View>
              {state.userRole === "admin" && (
                <AntDesign
                  name="delete"
                  size={25}
                  color="red"
                  onPress={() => deleteCourse(item._id, item.number)}
                />
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CourseThree;

const styles = StyleSheet.create({});
