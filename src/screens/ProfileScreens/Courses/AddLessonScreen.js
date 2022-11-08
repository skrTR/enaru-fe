import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import Header from "../../../components/Header";
import axios from "axios";
import { api } from "../../../../Constants";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import Modal from "react-native-modal";
import MyProgressBar from "../../../components/MyProgressBar";

const AddLessonScreen = () => {
  const [productImage, setProductImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState(0);
  const [uploadTotal, setUploadTotal] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [category, setCategory] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const video = useRef(null);
  const sendData = () => {
    axios
      .post(`${api}/api/v1/courses`, {
        title: title,
        description: description,
        number: number,
        category: category,
      })
      .then((res) => {
        const newPost = res.data.data;
        if (productImage) {
          const xhr = new XMLHttpRequest();
          xhr.addEventListener("load", (event) => handleUploadComplete(event));
          xhr.upload.addEventListener("progress", handleUploadProgress);
          const fileExt = productImage.substring(
            productImage.lastIndexOf(".") + 1
          );
          const formData = new FormData();
          formData.append("file", {
            uri: productImage,
            type: `image/${fileExt}`,
            name: `new__profile.${fileExt}`,
          });
          xhr.open("PUT", `${api}/api/v1/courses/${newPost._id}/upload-video`);
          xhr.send(formData);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const openProductImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("zurgiin erhiig neene uu");
    }
    if (status === "granted") {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      });
      if (!response.cancelled) {
        setProductImage(response.uri);
      }
    }
  };
  const handleUploadComplete = (event) => {
    setUploadProgress(0);
    setUploadTotal(0);
    navigation.goBack();
  };

  const handleUploadProgress = (event) => {
    if (uploadTotal === 0) setUploadTotal(event.total);

    setUploadProgress((uploadProgress) => {
      return Math.round((event.loaded * 100) / event.total);
    });
  };
  if (uploadTotal > 0) {
    return <MyProgressBar step={uploadProgress} steps={100} height={20} />;
  }
  return (
    <>
      <Header isBack={true} />
      <ScrollView>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#c4c4c4",
            margin: 5,
          }}
          onPress={openProductImageLibrary}
        >
          {productImage ? (
            <Video
              ref={video}
              style={{ width: 200, height: 300 }}
              source={{
                uri: productImage,
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
            />
          ) : (
            <View
              style={{
                alignItems: "center",
                width: 200,
                height: 300,
                justifyContent: "center",
              }}
            >
              <Entypo name="video-camera" size={24} color="black" />
              <Text>Сургалт оруулах</Text>
            </View>
          )}
        </TouchableOpacity>
        {/* title */}
        <>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Сургалтын дугаар
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
            placeholder={"Сургалтын дугаар"}
            value={number}
            onChangeText={setNumber}
          />
        </>
        <>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Гарчиг
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
            placeholder={"Гарчиг"}
            value={title}
            onChangeText={setTitle}
          />
        </>
        <>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Тайлбар
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
            placeholder={"Тайлбар"}
            value={description}
            onChangeText={setDescription}
          />
        </>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <>
            <Text
              style={{
                marginTop: 20,
                fontSize: 15,
                fontWeight: "600",
                marginHorizontal: 10,
              }}
            >
              Категори
            </Text>
            <Text
              style={{
                borderRadius: 10,
                marginHorizontal: 10,
                borderWidth: 1,
                borderColor: "#cccccccc",
                padding: 10,
                marginTop: 10,
              }}
            >
              {category === "1"
                ? "АЛТАН ДЭЭД ҮНЭНИЙ АЯЛГУУ"
                : category === "2"
                ? "ҮНДЭСНИЙ АЖ ТӨРӨХҮЙ-ЭКО БҮТЭЭН БАЙГУУЛАЛТ"
                : category === "3"
                ? "ХУДАМ МОНГОЛ БИЧИГ"
                : "Категори сонгох"}
            </Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "#6a1b86",
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 10,
            borderColor: "#cccccccc",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={sendData}
        >
          <Text style={{ color: "white" }}>Оруулах</Text>
        </TouchableOpacity>

        <View style={{ marginBottom: 200 }} />
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                marginHorizontal: 10,
                borderRadius: 10,
                marginTop: 10,
                flexDirection: "row",
                width: "95%",
                marginTop: 40,
                borderWidth: 1,
                borderColor: "#cccccccc",
              }}
              onPress={() => {
                setCategory("1");
                setModalVisible(!isModalVisible);
              }}
            >
              <Image
                source={require("../../../../assets/enau/lesson1.jpg")}
                style={{
                  width: "25%",
                  height: 150,
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  padding: 5,
                  alignItems: "center",
                  width: "75%",
                }}
              >
                <Text style={{ fontWeight: "600" }}>
                  АЛТАН ДЭЭД ҮНЭНИЙ АЯЛГУУ
                </Text>
                <Text style={{ fontWeight: "300" }}>Үндсэн сургалт</Text>

                <View
                  style={{
                    position: "absolute",
                    bottom: 5,
                    right: 10,
                    backgroundColor: "#6a1b86",
                    padding: 5,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontWeight: "200", color: "white" }}>
                    Сонгох{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                marginHorizontal: 10,
                borderRadius: 10,
                marginTop: 10,
                flexDirection: "row",
                width: "95%",
                borderWidth: 1,
                borderColor: "#cccccccc",
              }}
              onPress={() => {
                setCategory("2");
                setModalVisible(!isModalVisible);
              }}
            >
              <Image
                source={require("../../../../assets/enau/lesson2.jpg")}
                style={{
                  width: "25%",
                  height: 150,
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  padding: 5,
                  alignItems: "center",
                  width: "75%",
                }}
              >
                <Text style={{ fontWeight: "600", marginHorizontal: 5 }}>
                  ҮНДЭСНИЙ АЖ ТӨРӨХҮЙ-ЭКО БҮТЭЭН БАЙГУУЛАЛТ
                </Text>
                <Text style={{ fontWeight: "300" }}>Бодлогын сургалт</Text>

                <View
                  style={{
                    position: "absolute",
                    bottom: 5,
                    right: 10,
                    backgroundColor: "#6a1b86",
                    padding: 5,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontWeight: "200", color: "white" }}>
                    Сонгох{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                marginHorizontal: 10,
                borderRadius: 10,
                marginTop: 10,
                flexDirection: "row",
                width: "95%",
                borderWidth: 1,
                borderColor: "#cccccccc",
              }}
              onPress={() => {
                setCategory("3");
                setModalVisible(!isModalVisible);
              }}
            >
              <Image
                source={require("../../../../assets/enau/lesson3.jpg")}
                style={{
                  width: "25%",
                  height: 150,
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  padding: 5,
                  alignItems: "center",
                  width: "75%",
                }}
              >
                <Text style={{ fontWeight: "600", marginHorizontal: 5 }}>
                  ХУДАМ МОНГОЛ БИЧИГ
                </Text>
                <Text style={{ fontWeight: "300" }}>Үнэ цэнийн сургалт</Text>

                <View
                  style={{
                    position: "absolute",
                    bottom: 5,
                    right: 10,
                    backgroundColor: "#6a1b86",
                    padding: 5,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontWeight: "200", color: "white" }}>
                    Сонгох{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#6a1b86",
                marginHorizontal: 10,
                marginTop: 10,
                borderRadius: 10,
                borderColor: "#cccccccc",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setModalVisible(!isModalVisible)}
            >
              <Text style={{ color: "white" }}>Буцах</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
};

export default AddLessonScreen;

const styles = StyleSheet.create({});
