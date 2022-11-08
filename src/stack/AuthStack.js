import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AfterSignUp from "../screens/Auth/AfterSignUp";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import RegisterScreen2 from "../screens/Auth/RegisterScreen2";

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <AuthStack.Screen
        name="RegisterScreen2"
        component={RegisterScreen2}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <AuthStack.Screen
        name="AfterSignUp"
        component={AfterSignUp}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStack;
