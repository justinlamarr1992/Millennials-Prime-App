import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import DrawerNavigation from "./DrawerNavigator";

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <DrawerNavigation /> */}
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
}
