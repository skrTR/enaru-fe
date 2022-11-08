import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../../components/Header";
import { api } from "../../../../Constants";
import { Video } from "expo-av";
import axios from "axios";
import moment from "moment";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as Linking from "expo-linking";

const Lesson1 = ({ route }) => {
  const { id } = route.params;
  const video = useRef(null);
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(`${api}/api/v1/courses/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.error.message);
      });
  };
  const [comment, setComment] = useState([]);
  const [text, setText] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [access, setAccess] = useState(false);
  const getComment = () => {
    axios
      .get(`${api}/api/v1/comments?course=${id}&limit=1000`)
      .then((res) => {
        setComment(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postComment = () => {
    axios
      .post(`${api}/api/v1/comments`, {
        description: text,
        course: id,
      })
      .then((res) => {
        setRefresh(true);
        setText("");
        Keyboard.dismiss();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const endVideo = (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      setAccess(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getComment();
    setRefresh(false);
  }, [refresh]);
  if (!data) {
    return null;
  }
  return (
    <>
      <KeyboardAwareScrollView>
        <ScrollView style={{ height: "100%" }}>
          <Header isBack={access ? true : false} />
          <Text style={{ fontWeight: "bold", margin: 10, fontSize: 18 }}>
            {data.title}
          </Text>
          <Video
            ref={video}
            style={{ width: "100%", height: 300 }}
            source={{
              uri: `${api}/upload/${data.video}`,
            }}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={(playbackStatus) =>
              endVideo(playbackStatus)
            }
          />

          {comment.map((data, index) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  marginHorizontal: 10,
                  marginTop: 10,
                  borderColor: "#cccccccc",
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                key={index}
              >
                <Image
                  source={require("../../../../assets/klaster.png")}
                  style={{ width: 50, height: 50, borderRadius: 10 }}
                />

                <Text style={{ marginLeft: 5, width: "50%" }}>
                  {data.description}
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 10,
                    fontSize: 12,
                    fontWeight: "300",
                  }}
                >
                  {moment(data.createdAt).fromNow()}
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              padding: 15,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10,
              // color: "grey",
              width: "90%",
              color: "black",
              height: 43,
            }}
            autoCorrect={false}
            autoCapitalize="none"
            selectionColor={"#6a1b86"}
            placeholder="Та сэтгэгдлээ үлдээнэ үү"
            placeholderTextColor={"#cccccc"}
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity
            onPress={postComment}
            disabled={text.length > 0 ? false : true}
          >
            <MaterialCommunityIcons
              name="send-circle"
              size={40}
              color={text.length > 0 ? "#6a1b86" : "#cccccccc"}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Lesson1;

const styles = StyleSheet.create({});
