import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import PhotoGallery from "./PhotoGallery";
import VideoGallery from "./VideoGallery";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
const GalleryScreen = () => {
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
                marginVertical: 10,
                borderRadius: 10,
                marginHorizontal: 5,
                backgroundColor: isFocused ? "#6a1b86" : "white",
              }}
            >
              <Animated.Text
                style={{
                  fontSize: 18,
                  padding: 5,
                  // opacity,
                  color: isFocused ? "white" : "grey",
                  fontWeight: isFocused ? "600" : "400",
                }}
              >
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <>
      <Header />
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Зургийн цомог" component={PhotoGallery} />
        <Tab.Screen name="Видеонууд" component={VideoGallery} />
      </Tab.Navigator>
    </>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({});
