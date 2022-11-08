import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  Dimensions,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../../Constants";
import UserContext from "../../context/UserContex";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
const PhotoGallery = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const state = useContext(UserContext);
  const navigation = useNavigation();

  const getData = () => {
    axios
      .get(`${api}/api/v1/photos?limit=1000&sort=-createdAt`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err, "photo gallery");
      });
  };
  const deletePhoto = (id) => {
    Alert.alert(
      "Анхаар!",
      "Та зураг устгаснаар дахиж сэргээгдэхгүйг анхаарна уу",
      [
        {
          text: "Үгүй",
          style: "cancel",
        },
        {
          text: "Устга",
          onPress: () => {
            axios
              .delete(`${api}/api/v1/photos/${id}`)
              .then((res) => {
                setRefresh(true);
              })
              .catch((err) => {
                console.log(err.response);
              });
          },
        },
      ]
    );
  };
  useEffect(() => {
    setRefresh(false);
    getData();
  }, [refresh]);
  const handleRefresh = () => {
    setRefresh(true);
  };

  return (
    <>
      {state.userRole === "admin" && (
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
          onPress={() => navigation.navigate("AddPhoto")}
        >
          <Text style={{ color: "white" }}>Зураг нэмэх</Text>
        </TouchableOpacity>
      )}
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        numColumns={2}
        refreshing={refresh}
        onRefresh={handleRefresh}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{}}
              onPress={() => {
                navigation.navigate("ViewPhotoGallery", { image: item.name });
              }}
            >
              {state.userRole === "admin" && (
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    top: 5,
                    right: 5,
                    backgroundColor: "red",
                    padding: 5,
                    borderRadius: 10,
                  }}
                  onPress={() => deletePhoto(item._id)}
                >
                  <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
              )}

              <Image
                source={{ uri: `${api}/upload/${item.name}` }}
                style={{
                  width: width / 2.1,
                  height: height / 2.6,
                  resizeMode: "contain",
                  flexDirection: "row",
                  margin: 5,
                  backgroundColor: "black",
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default PhotoGallery;

const styles = StyleSheet.create({});
