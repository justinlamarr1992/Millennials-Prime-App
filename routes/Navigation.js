import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import StackNavigator from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import DrawerNavigation from "./DrawerNavigator";

export default function Navigation() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigation /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}
