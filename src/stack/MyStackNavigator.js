import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LoginScreen from "../screens/Auth/LoginScreen";
import EventStack from "./EventStack";
import AboutUsStack from "./AboutUsStack";
import GalleryStack from "./GalleryStack";
import ProfileStack from "./ProfileStack";
import AuthStack from "./AuthStack";

import UserContext from "../context/UserContex";
import SplashScreen from "../screens/SplashScreen";
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  const state = useContext(UserContext);
  if (state.isLoading === true) {
    return <SplashScreen />;
  }
  return (
    <>
      <Tab.Navigator
        initialRouteName="EventScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "EventStack") {
              iconName = focused ? "exchange" : "exchange";
            } else if (route.name === "AboutUsStack") {
              iconName = focused ? "sitemap" : "sitemap";
            } else if (route.name === "ProfileStack") {
              iconName = focused ? "th-list" : "th-list";
            } else if (route.name === "AuthStack") {
              iconName = focused ? "users" : "users";
            } else if (route.name === "GalleryStack") {
              iconName = focused ? "sort-numeric-asc" : "sort-numeric-asc";
            }
            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: "#6a1b86",
        })}
      >
        <Tab.Screen
          name="EventStack"
          options={{ headerShown: false, title: "Эвэнт" }}
          component={EventStack}
        />
        <Tab.Screen
          name="AboutUsStack"
          options={{ headerShown: false, title: "Бидний тухай" }}
          component={AboutUsStack}
        />
        <Tab.Screen
          name="GalleryStack"
          options={{ headerShown: false, title: "Зургийн цомог" }}
          component={GalleryStack}
        />
        {state.isLoggedIn ? (
          <Tab.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={{ headerShown: false, title: "Бүртгэл" }}
          />
        ) : (
          <Tab.Screen
            name="AuthStack"
            options={{ headerShown: false, title: "Нэвтрэх" }}
            component={AuthStack}
          />
        )}
      </Tab.Navigator>
    </>
  );
};

export default StackNavigator;
