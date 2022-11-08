import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import moment from "moment/moment";
import axios from "axios";
import { api } from "../../../Constants";
import UserContext from "../../context/UserContex";
import "moment/locale/mn";
import { AntDesign } from "@expo/vector-icons";
import Loading from "../../components/Loading";
import { useScrollToTop } from "@react-navigation/native";
const EventScreen = () => {
  const state = useContext(UserContext);
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();
  const ref = useRef(null);
  useScrollToTop(ref);
  const getData = () => {
    setLoading(true);
    axios
      .get(`${api}/api/v1/events?limit=1000&sort=-createdAt`)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
    setRefresh(false);
  }, [isFocused, refresh]);
  const deleteEvent = (id) => {
    Alert.alert(
      "Анхаар",
      "Та энэхүү эвэнт ийг устгаснаар дахиж сэргээх боломжгүйг анхаарна уу",
      [
        {
          text: "Үгүй",
          style: "cancel",
        },
        {
          text: "Устга",
          onPress: () => {
            axios
              .delete(`${api}/api/v1/events/${id}`)
              .then((res) => {
                setRefresh(true);
              })
              .catch((err) => {
                console.log(err);
                setRefresh(true);
              });
          },
        },
      ]
    );
  };
  const scrollY = useRef(new Animated.Value(0)).current;
  const handleRefresh = () => {
    setRefresh(true);
  };
  return (
    <View>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Animated.FlatList
          data={data}
          //  onScroll={Animated.event}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          ref={ref}
          refreshing={refresh}
          onRefresh={handleRefresh}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={
            <>
              {state.userRole === "admin" && (
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: "#cccccccc",
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    marginTop: 10,
                    marginHorizontal: 10,
                    backgroundColor: "#6a1b86",
                  }}
                  onPress={() => navigation.navigate("AddEventScreen")}
                >
                  <Text style={{ color: "white" }}>Эвэнт нэмэх</Text>
                </TouchableOpacity>
              )}
            </>
          }
          renderItem={({ item, index }) => {
            const inputRange = [-1, 0, 450 * index, 450 * (index + 3)];
            const opacityInputRange = [-1, 0, 450 * index, 450 * (index + 1)];
            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });
            const opacity = scrollY.interpolate({
              inputRange: opacityInputRange,
              outputRange: [1, 1, 1, 0],
            });
            return (
              <Animated.View
                style={{
                  marginTop: 10,
                  backgroundColor: "white",
                  margin: 10,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#cccccccc",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.3,
                  shadowRadius: 20,
                  transform: [{ scale }],
                  opacity,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("EventDetailScreen", { id: item._id })
                  }
                >
                  {state.userRole === "admin" && (
                    <>
                      <TouchableOpacity
                        style={{
                          position: "absolute",
                          zIndex: 2,
                          backgroundColor: "white",
                          top: 10,
                          right: 10,
                          padding: 5,
                          borderRadius: 5,
                        }}
                        onPress={() =>
                          navigation.navigate("EditEventScreen", {
                            data: item,
                          })
                        }
                      >
                        <AntDesign name="edit" size={20} color="#6a1b86" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          position: "absolute",
                          zIndex: 2,
                          backgroundColor: "white",
                          top: 10,
                          left: 10,
                          padding: 5,
                          borderRadius: 5,
                        }}
                        onPress={() => deleteEvent(item._id)}
                      >
                        <AntDesign name="delete" size={20} color="red" />
                      </TouchableOpacity>
                    </>
                  )}
                  {/* image */}
                  <Image
                    style={{
                      width: "100%",
                      height: 250,
                      borderRadius: 20,
                      alignSelf: "center",
                    }}
                    source={{ uri: `${api}/upload/${item.photo}` }}
                  />
                  {item.when && (
                    <View
                      style={{
                        marginTop: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: 20,
                      }}
                    >
                      <Text style={{ fontWeight: "300", color: "#cccccc" }}>
                        🕒{moment(item.when).fromNow()}
                      </Text>
                      <Text style={{ fontWeight: "300", color: "grey" }}>
                        🕒{moment(item.when).format("YYYY-MM-DD HH:mm")}
                      </Text>
                    </View>
                  )}
                  <Text
                    style={{
                      fontWeight: "600",
                      margin: 10,
                      fontSize: 18,
                      marginHorizontal: 20,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "300",
                      fontSize: 15,
                      marginHorizontal: 15,
                      color: "darkgrey",
                      marginBottom: 10,
                    }}
                    numberOfLines={2}
                  >
                    {item.description && item.description.description1}
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            );
          }}
          ListFooterComponent={<View style={{ marginBottom: 200 }} />}
        />
      )}
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({});
