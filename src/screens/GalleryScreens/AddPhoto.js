import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import * as ImagePicker from "expo-image-picker";
import { api } from "../../../Constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MyProgressBar from "../../components/MyProgressBar";
const AddPhoto = () => {
  const [image, setImage] = useState();
  const [uploadTotal, setUploadTotal] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigation = useNavigation();
  const openImageProfileLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Зургийн эрхийг нээнэ үү");
    }
    if (status === "granted") {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (!response.cancelled) {
        setImage(response.uri);
      }
    }
  };
  const sendVerify = () => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (event) => handleUploadComplete(event));
    xhr.upload.addEventListener("progress", handleUploadProgress);
    const formData = new FormData();
    if (image) {
      const fileExt = image && image.substring(image.lastIndexOf(".") + 1);
      formData.append("file", {
        uri: image,
        type: `image/${fileExt}`,
        name: "portf__1",
      });
    }
    xhr.open("POST", `${api}/api/v1/photos`);
    xhr.send(formData);
  };
  const handleUploadComplete = (event) => {
    setUploadProgress(0);
    setUploadTotal(0);
    navigation.goBack();
  };

  const handleUploadProgress = (event) => {
    if (uploadTotal === 0) setUploadTotal(event.total);

    setUploadProgress((uploadProgress) => {
      console.log("Upload total : " + uploadTotal);
      console.log("Upload progress: " + uploadProgress);
      return Math.round((event.loaded * 100) / event.total);
    });
  };
  if (uploadTotal > 0) {
    return <MyProgressBar step={uploadProgress} steps={100} height={20} />;
  }
  return (
    <>
      <Header isBack={true} />
      <TouchableOpacity
        onPress={openImageProfileLibrary}
        style={{
          width: "80%",
          height: 200,
          marginVertical: 10,
          alignSelf: "center",
          backgroundColor: "#cccccccc",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {image ? (
          <ImageBackground
            source={{
              uri: image,
            }}
            style={{ width: "100%", height: 200 }}
          ></ImageBackground>
        ) : (
          <AntDesign
            name="camerao"
            size={30}
            color={"black"}
            style={{ marginTop: 80 }}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "#cccccccc",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={sendVerify}
      >
        <Text>Зураг оруулах</Text>
      </TouchableOpacity>
    </>
  );
};

export default AddPhoto;

const styles = StyleSheet.create({});
