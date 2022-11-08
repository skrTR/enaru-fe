import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { api } from "../../../Constants";
import moment from "moment";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 1.8;
const ViewPhotoGallery = () => {
  const [data, setData] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [count, setCount] = useState("");
  const getData = () => {
    axios
      .get(`${api}/api/v1/photos?limit=1000&sort=-createdAt`)
      .then((res) => {
        setData(res.data.data);
        setCount(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Feather
        name="x"
        size={30}
        color="black"
        style={{ position: "absolute", top: 30, left: 10, zIndex: 2 }}
        onPress={() => navigation.goBack()}
      />
      <Animated.FlatList
        data={data}
        keyExtractor={(item, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View
              style={{
                width,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 18,
                  shadowColor: "#000",
                  shadowOpacity: 0.5,
                  shadowRadius: 30,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  padding: 10,
                  backgroundColor: "white",
                  marginTop: 50,
                }}
              >
                <Text style={{ fontWeight: "200" }}>
                  Оруулсан: {moment(item.createdAt).fromNow()}
                </Text>
                {index !== 0 && (
                  <View
                    style={{
                      position: "absolute",
                      left: 10,
                      top: 50,
                      zIndex: 3,
                    }}
                  >
                    <Animatable.Text
                      animation="pulse"
                      iterationCount={"infinite"}
                      direction="alternate"
                      style={{ fontSize: 30, color: "#6a1b86" }}
                      iterationDelay={0}
                    >
                      ←
                    </Animatable.Text>
                  </View>
                )}
                {index + 1 < count && (
                  <View
                    style={{
                      position: "absolute",
                      right: 10,
                      top: 50,
                    }}
                  >
                    <Animatable.Text
                      animation="pulse"
                      iterationCount={"infinite"}
                      direction="alternate"
                      style={{ fontSize: 30, color: "#6a1b86" }}
                      iterationDelay={0}
                    >
                      →
                    </Animatable.Text>
                  </View>
                )}
                <View
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    overflow: "hidden",
                    alignItems: "center",
                    borderRadius: 14,
                  }}
                >
                  <Animated.Image
                    source={{ uri: `${api}/upload/${item.name}` }}
                    style={{
                      width: ITEM_WIDTH * 1,
                      height: ITEM_HEIGHT,
                      resizeMode: "contain",
                      transform: [
                        {
                          translateX,
                        },
                      ],
                    }}
                  />
                </View>
                <Text style={{ fontWeight: "200", textAlign: "center" }}>
                  {index + 1} / {count}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ViewPhotoGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
