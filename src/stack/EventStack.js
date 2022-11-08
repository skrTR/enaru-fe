import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddEventScreen from "../screens/EventScreens/AddEventScreen";
import EditEventScreen from "../screens/EventScreens/EditEventScreen";
import EventDetailScreen from "../screens/EventScreens/EventDetailScreen";
import EventScreen from "../screens/EventScreens/EventScreen";

const EventStack = () => {
  const EventStack = createNativeStackNavigator();
  return (
    <EventStack.Navigator>
      <EventStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={{ headerShown: false }}
      />
      <EventStack.Screen
        name="EventDetailScreen"
        component={EventDetailScreen}
        options={{
          headerShown: false,
          fullScreenGestureEnabled: true,
          // gestureDirection: "vertical",
        }}
      />
      <EventStack.Screen
        name="AddEventScreen"
        component={AddEventScreen}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
      <EventStack.Screen
        name="EditEventScreen"
        component={EditEventScreen}
        options={{ headerShown: false, fullScreenGestureEnabled: true }}
      />
    </EventStack.Navigator>
  );
};

export default EventStack;
