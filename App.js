import { NavigationContainer } from "@react-navigation/native";
import MyStackNavigator from "./src/stack/MyStackNavigator";
import { UserStore } from "./src/context/UserContex";
import "react-native-gesture-handler";
export default function App() {
  return (
    <NavigationContainer>
      <UserStore>
        <MyStackNavigator />
      </UserStore>
    </NavigationContainer>
  );
}
