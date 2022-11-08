import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MyBackButton from "../components/MyBackButton";
import VideoPlayer from "../components/VideoPlayer";
import AddPhoto from "../screens/GalleryScreens/AddPhoto";
import AddVideo from "../screens/GalleryScreens/AddVideo";
import GalleryScreen from "../screens/GalleryScreens/GalleryScreen";
import ViewPhoto from "../screens/GalleryScreens/ViewPhoto";
import ViewPhotoGallery from "../screens/GalleryScreens/ViewPhotoGallery";

const GalleryStack = () => {
  const GalleryStack = createNativeStackNavigator();
  return (
    <GalleryStack.Navigator>
      <GalleryStack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{ headerShown: false }}
      />
      <GalleryStack.Screen
        name="AddPhoto"
        component={AddPhoto}
        options={{ headerShown: false }}
      />
      <GalleryStack.Screen
        name="AddVideo"
        component={AddVideo}
        options={{ headerShown: false }}
      />
      <GalleryStack.Screen
        name="ViewPhoto"
        component={ViewPhoto}
        options={{
          headerShown: false,
          fullScreenGestureEnabled: true,
          gestureDirection: "vertical",
          presentation: "modal",
        }}
      />
      <GalleryStack.Screen
        name="ViewPhotoGallery"
        component={ViewPhotoGallery}
        options={{
          headerShown: false,
          fullScreenGestureEnabled: true,
          gestureDirection: "vertical",
          presentation: "modal",
        }}
      />
      <GalleryStack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={{
          headerShown: true,
          presentation: "fullScreenModal",
          fullScreenGestureEnabled: true,
          title: "Видео",
          headerLeft: () => <MyBackButton />,
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { color: "white" },
        }}
      />
    </GalleryStack.Navigator>
  );
};

export default GalleryStack;
