import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AboutScreen from "../screens/AboutScreens/AboutScreen";
import ClusterScreen from "../screens/AboutScreens/Cluster/ClusterScreen";
import CombinationScreen from "../screens/AboutScreens/Combination/CombinationScreen";
import EducationScreen from "../screens/AboutScreens/Education/EducationScreen";
import ProjectScreen from "../screens/AboutScreens/Project/ProjectScreen";
import TeamScreen from "../screens/AboutScreens/Teams/TeamScreen";

const AboutUsStack = () => {
  const AboutUsStack = createNativeStackNavigator();
  return (
    <AboutUsStack.Navigator>
      <AboutUsStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <AboutUsStack.Screen
        name="CombinationScreen"
        component={CombinationScreen}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <AboutUsStack.Screen
        name="EducationScreen"
        component={EducationScreen}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <AboutUsStack.Screen
        name="ProjectScreen"
        component={ProjectScreen}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <AboutUsStack.Screen
        name="ClusterScreen"
        component={ClusterScreen}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <AboutUsStack.Screen
        name="TeamScreen"
        component={TeamScreen}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
    </AboutUsStack.Navigator>
  );
};

export default AboutUsStack;
