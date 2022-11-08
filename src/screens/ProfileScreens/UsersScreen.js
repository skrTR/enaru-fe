import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../../Constants";
import Header from "../../components/Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import VerifyUsers from "./UsersInfo/VerifyUsers";
import UnverfiyUsers from "./UsersInfo/UnverfiyUsers";
const Tab = createMaterialTopTabNavigator();
const UsersScreen = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(`${api}/api/v1/users`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View style={{ flexDirection: "row" }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map((i) => (i === index ? 1 : 0.4)),
          });

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={index}
              style={{
                flex: 1,
                borderColor: "#cccccccc",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 10,
                marginHorizontal: 5,
                backgroundColor: isFocused ? "#6a1b86" : "white",
              }}
            >
              <Animated.Text
                style={{
                  fontSize: 18,
                  padding: 5,
                  opacity,
                  color: isFocused ? "white" : "grey",
                  fontWeight: isFocused ? "600" : "400",
                }}
              >
                {label}
              </Animated.Text>
              {/* <View
                style={{
                  borderWidth: 1,
                  width: "90%",
                  borderColor: isFocused ? "#2E86C1" : "#cccccccc",
                  alignSelf: "center",
                }}
              /> */}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  return (
    <>
      <Header isBack={true} />
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Баталгаажсан" component={VerifyUsers} />
        <Tab.Screen name="Баталгаажаагүй" component={UnverfiyUsers} />
      </Tab.Navigator>
    </>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({});
