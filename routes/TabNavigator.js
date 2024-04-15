import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import About from "../screens/About";

import { Image } from "react-native";
import Logo from "../assets/images/MillennialsPrimeLogoNB.png";
import SignIn from "../screens/auth/SignIn";
import Register from "../screens/auth/Register";

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
        name="Sign In"
        component={SignIn}
        options={{
          title: "Log In",
          headerStyle: {
            backgroundColor: "#8e202b",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          title: "Register",
          headerStyle: {
            backgroundColor: "#8e202b",
          },
          headerTintColor: "#ffffff",
        }}
      />
    </Tab.Navigator>
  );
}
