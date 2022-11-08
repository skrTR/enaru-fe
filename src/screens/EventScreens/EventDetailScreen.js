import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import * as Linking from "expo-linking";
import axios from "axios";
import { api } from "../../../Constants";
import moment from "moment";
const EventDetailScreen = ({ route }) => {
  const { id } = route?.params;
  const [data, setData] = useState([]);
  const scrollA = useRef(new Animated.Value(0)).current;
  const getData = () => {
    axios
      .get(`${api}/api/v1/events/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  if (!data) {
    return null;
  }
  return (
    <>
      <Header isBack={true} />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Animated.Image
          source={{
            uri: `${api}/upload/${data.photo}`,
          }}
          style={{
            width: "100%",
            height: 235,
            resizeMode: "contain",
            transform: [
              {
                translateY: scrollA,
              },
            ],
          }}
        />
        <View style={{ height: "100%", backgroundColor: "#fff" }}>
          <Text style={{ fontWeight: "bold", margin: 5, fontSize: 15 }}>
            {data.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{ fontWeight: "300", width: "45%", textAlign: "center" }}
            >
              Хэзээ:{" "}
              <Text style={{ fontWeight: "400" }}>
                {/* {2022.06.04-ны 11:00 цагт}{" "} */}
                {moment(data.when).format("YYYY.MM.DD-ны HH:mm цагт")}{" "}
              </Text>
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#cccccc",
                marginHorizontal: 10,
              }}
            />
            <Text
              style={{ fontWeight: "300", width: "45%", textAlign: "center" }}
            >
              Хаана: <Text style={{ fontWeight: "400" }}>{data.where} </Text>
            </Text>
          </View>
          {data.description && (
            <>
              {data.description.description1 && (
                <Text
                  style={{
                    marginVertical: 5,
                    marginHorizontal: 15,
                    textAlign: "justify",
                    fontWeight: "300",
                  }}
                >
                  {data.description.description1}
                </Text>
              )}
              {data.description.description2 && (
                <Text
                  style={{
                    marginVertical: 5,
                    marginHorizontal: 15,
                    textAlign: "justify",
                    fontWeight: "300",
                  }}
                >
                  {data.description.description2}
                </Text>
              )}
              {data.description.description3 && (
                <Text
                  style={{
                    marginVertical: 5,
                    marginHorizontal: 15,
                    textAlign: "justify",
                    fontWeight: "300",
                  }}
                >
                  {data.description.description3}
                </Text>
              )}
              {data.description.description4 && (
                <Text
                  style={{
                    marginVertical: 5,
                    marginHorizontal: 15,
                    textAlign: "justify",
                    fontWeight: "300",
                  }}
                >
                  {data.description.description4}
                </Text>
              )}
              {data.description.description5 && (
                <Text
                  style={{
                    marginVertical: 5,
                    marginHorizontal: 15,
                    textAlign: "justify",
                    fontWeight: "300",
                  }}
                >
                  {data.description.description5}
                </Text>
              )}
            </>
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 10,
            }}
          >
            <Text
              style={{ fontWeight: "300", width: "45%", textAlign: "center" }}
            >
              Холбоо барих:{" "}
              <Text
                style={{ fontWeight: "400", color: "blue" }}
                onPress={() => Linking.openURL(`tel:${data.contact}`)}
              >
                {data.contact}
              </Text>
            </Text>
            {data.contact2 && (
              <Text
                style={{ fontWeight: "300", width: "45%", textAlign: "center" }}
              >
                Холбоо барих:{" "}
                <Text
                  style={{ fontWeight: "400", color: "blue" }}
                  onPress={() => Linking.openURL(`tel:${data.contact2}`)}
                >
                  {data.contact2}
                </Text>
              </Text>
            )}
          </View>
        </View>
        <View style={{ marginBottom: 200 }} />
      </Animated.ScrollView>
    </>
  );
};

export default EventDetailScreen;

const styles = StyleSheet.create({});
