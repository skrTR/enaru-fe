import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  View,
  Dimensions,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../../Constants";
import UserContext from "../../context/UserContex";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Video, AVPlaybackStatus } from "expo-av";
import Loading from "../../components/Loading";
import * as Animatable from "react-native-animatable";
import * as Linking from "expo-linking";
const { width, height } = Dimensions.get("screen");
const PhotoGallery = () => {
  const [data, setData] = useState([]);
  const state = useContext(UserContext);
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    axios
      .get(`${api}/api/v1/videos?limit=1000&sort=-createdAt`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
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
              .delete(`${api}/api/v1/videos/${id}`)
              .then((res) => {
                handleRefresh();
              })
              .catch((err) => {
                console.log(err.message);
                handleRefresh();
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
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
              onPress={() => navigation.navigate("AddVideo")}
            >
              <Text style={{ color: "white" }}>Бичлэг нэмэх</Text>
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
                <View style={{}}>
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
                      onPress={() => {
                        deletePhoto(item._id);
                        setLoading(true);
                      }}
                    >
                      <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() =>
                      navigation.navigate("VideoPlayer", {
                        videoLink: item.name,
                      })
                    }
                  >
                    <Video
                      style={{
                        width: width / 2.1,
                        height: height / 2.6,
                        margin: 3,
                        backgroundColor: "black",
                      }}
                      source={{
                        uri: `${api}/upload/${item.name}`,
                      }}
                      resizeMode="cover"
                    />
                    <Animatable.Text
                      animation="pulse"
                      easing="ease-out"
                      iterationCount="infinite"
                      direction="alternate"
                      style={{
                        fontWeight: "bold",
                        fontSize: 50,
                        position: "absolute",
                      }}
                    >
                      ▶️
                    </Animatable.Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            ListFooterComponent={<View style={{ marginBottom: 100 }} />}
          />
        </>
      )}
    </>
  );
};

export default PhotoGallery;

const styles = StyleSheet.create({});
