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
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import Header from "../../components/Header";
import DatePicker from "react-native-modern-datepicker";
import axios from "axios";
import { api } from "../../../Constants";
import { useNavigation } from "@react-navigation/native";
import MyProgressBar from "../../components/MyProgressBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AddEventScreen = () => {
  const [productImage, setProductImage] = useState();
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [uploadTotal, setUploadTotal] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigation = useNavigation();
  const [picker, setPicker] = useState(false);
  const [description, setDescription] = useState({
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
  });
  const [where, setWhere] = useState("");
  const [contact, setContact] = useState("");
  const [contact2, setContact2] = useState("");
  const checkDate = (date) => {
    setSelectedDate(date);
    setPicker(true);
  };
  const sendData = () => {
    axios
      .post(`${api}/api/v1/events`, {
        title: title,
        description: description,
        when: selectedDate,
        where: where,
        contact: contact,
        contact2: contact2,
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
          xhr.open("PUT", `${api}/api/v1/events/${newPost._id}/upload-photo`);
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
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (!response.cancelled) {
        setProductImage(response.uri);
      }
    }
  };
  const checkDescription = (text) => {
    setDescription({
      ...description,
      description1: text,
    });
  };
  const checkDescription1 = (text) => {
    setDescription({
      ...description,
      description2: text,
    });
  };
  const checkDescription2 = (text) => {
    setDescription({
      ...description,
      description3: text,
    });
  };
  const checkDescription3 = (text) => {
    setDescription({
      ...description,
      description4: text,
    });
  };
  const checkDescription4 = (text) => {
    setDescription({
      ...description,
      description5: text,
    });
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
            <Image
              source={{ uri: productImage }}
              style={{ width: "100%", height: 220, resizeMode: "cover" }}
            />
          ) : (
            <View
              style={{
                alignItems: "center",
                padding: 40,
                justifyContent: "center",
              }}
            >
              <Entypo name="camera" size={24} color="black" />
              <Text>Зураг оруулах</Text>
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
        {/* description1 */}
        <>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Тайлбар1
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
            placeholder={"Тайлбар1"}
            value={description.description1}
            onChangeText={checkDescription}
            multiline
          />
        </>
        {/* description2 */}
        <>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Тайлбар 2
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
            placeholder={"Тайлбар 2"}
            value={description.description2}
            onChangeText={checkDescription1}
            multiline
          />
        </>
        {/* description3 */}
        <>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Тайлбар 3
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
            placeholder={"Тайлбар 3"}
            value={description.description3}
            onChangeText={checkDescription2}
            multiline
          />
        </>
        {/* description 4 */}
        <>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Тайлбар 4
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
            placeholder={"Тайлбар 4"}
            value={description.description4}
            onChangeText={checkDescription3}
            multiline
          />
        </>
        {/* description5 */}
        <>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Тайлбар 5
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
            placeholder={"Тайлбар 5"}
            value={description.description5}
            onChangeText={checkDescription4}
            multiline
          />
        </>
        {/* when date picker */}
        <View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Хэзээ болох
          </Text>
          {!picker ? (
            <DatePicker
              onSelectedChange={(date) => checkDate(date)}
              style={{ borderRadius: 10, marginVertical: 10 }}
              locale={"mn"}
            />
          ) : (
            <Text
              style={{
                borderRadius: 10,
                marginHorizontal: 10,
                borderWidth: 1,
                borderColor: "#cccccccc",
                padding: 10,
                marginVertical: 10,
              }}
              onPress={() => setPicker(!picker)}
            >
              {selectedDate}
            </Text>
          )}
        </View>
        {/* haana boloh */}
        <>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
            }}
          >
            Хаана болох
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
            placeholder={"Хаана болох"}
            value={where}
            onChangeText={setWhere}
          />
        </>
        {/* contact */}
        <>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
              marginTop: 10,
            }}
          >
            Холбоо барих дугаар
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
            placeholder={"Холбоо барих дугаар"}
            value={contact}
            onChangeText={setContact}
            keyboardType={"number-pad"}
          />
        </>
        <>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              marginHorizontal: 10,
              marginTop: 10,
            }}
          >
            Холбоо барих дугаар 2
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
            placeholder={"Холбоо барих дугаар 2"}
            value={contact2}
            onChangeText={setContact2}
            keyboardType={"number-pad"}
          />
        </>
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
      </ScrollView>
    </>
  );
};

export default AddEventScreen;

const styles = StyleSheet.create({});
