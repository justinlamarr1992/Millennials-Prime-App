import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import About from "../screens/About";

import { Image } from "react-native";
import Logo from "../assets/images/MillennialsPrimeLogoNB.png";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  function LogoTitle() {
    return <Image style={{ width: 44, height: 40 }} source={Logo} />;
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fffd9b",
        },
        headerTintColor: "#020101",
        tabBarActiveTintColor: "#fffd9b",
        tabBarInactiveTintColor: "#020101",
        tabBarActiveBackgroundColor: "#611821",
        tabBarInactiveBackgroundColor: "#611821",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: "#611821",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          title: "It Should Work",
          headerStyle: {
            backgroundColor: "#8e202b",
          },
          headerTintColor: "#ffffff",
        }}
      />
    </Tab.Navigator>
  );
}
