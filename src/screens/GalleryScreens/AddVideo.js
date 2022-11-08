import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState, useRef } from "react";
import Header from "../../components/Header";
import * as ImagePicker from "expo-image-picker";
import { api } from "../../../Constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import MyProgressBar from "../../components/MyProgressBar";
const AddVideo = () => {
  const [image, setImage] = useState();
  const [uploadTotal, setUploadTotal] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigation = useNavigation();
  const video = useRef(null);
  const openImageProfileLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Зургийн эрхийг нээнэ үү");
    }
    if (status === "granted") {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
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
      console.log(fileExt);
      formData.append("file", {
        uri: image,
        type: `mp4/${fileExt}`,
        name: "video.mp4",
      });
    }
    xhr.open("POST", `${api}/api/v1/videos`);
    xhr.send(formData);
    xhr.onload = function (e) {
      // console.log("Request Status", xhr.status);
      // console.log("Status", xhr);
    };
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
      <TouchableOpacity
        onPress={openImageProfileLibrary}
        style={{
          width: "80%",
          height: 300,
          marginVertical: 10,
          backgroundColor: "#cccccccc",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        {image ? (
          <Video
            ref={video}
            style={{ width: 200, height: 300 }}
            source={{
              uri: image,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
          />
        ) : (
          <AntDesign name="videocamera" size={30} color={"black"} />
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
        <Text>Бичлэг оруулах</Text>
      </TouchableOpacity>
    </>
  );
};

export default AddVideo;
