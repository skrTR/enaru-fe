import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CourseOne from "../screens/ProfileScreens/Courses/CourseOne";
import Lesson1 from "../screens/ProfileScreens/Courses/Lessons";
import AddLessonScreen from "../screens/ProfileScreens/Courses/AddLessonScreen";
import CourseScreen from "../screens/ProfileScreens/Courses/CourseScreen";
import CourseThree from "../screens/ProfileScreens/Courses/CourseThree";
import CourseTwo from "../screens/ProfileScreens/Courses/CourseTwo";
import ProfileScreen from "../screens/ProfileScreens/ProfileScreen";
import UserDetail from "../screens/ProfileScreens/UsersInfo/UserDetail";
import UsersScreen from "../screens/ProfileScreens/UsersScreen";

const ProfileStack = () => {
  const ProfileStack = createNativeStackNavigator();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="CourseScreen"
        component={CourseScreen}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <ProfileStack.Screen
        name="CourseOne"
        component={CourseOne}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <ProfileStack.Screen
        name="CourseTwo"
        component={CourseTwo}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <ProfileStack.Screen
        name="CourseThree"
        component={CourseThree}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <ProfileStack.Screen
        name="Lessons"
        component={Lesson1}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <ProfileStack.Screen
        name="AddLessonScreen"
        component={AddLessonScreen}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <ProfileStack.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <ProfileStack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStack;
