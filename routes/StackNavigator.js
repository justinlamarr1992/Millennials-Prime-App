import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Image } from "react-native";
import Logo from "../assets/images/MillennialsPrimeLogoNB.png";

import Home from "../screens/Home";
import TestComps from "../screens/TestComps";
import Header from "../shared/Header";

import { globalStyles } from "../styles/global";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();

  function LogoTitle() {
    return <Image style={{ width: 44, height: 40 }} source={Logo} />;
  }

  return (
    <Stack.Navigator
      //   Default header for pages not speified
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fffd9b",
        },
        headerTintColor: "#020101",
      }}
    >
      {/* Home Stack Navigator */}
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: "#611821",
            height: 200,
            width: 10,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          },
          headerTintColor: "#ffffff",
        }}
      /> */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header
                navigation={navigation}
                title="Welcome to Millennial's Prime"
              />
            ),
          };
        }}
      />
      <Stack.Screen
        name="TestComps"
        component={TestComps}
        options={{
          title: "It Should Work",
          headerStyle: {
            backgroundColor: "#8e202b",
          },
          headerTintColor: "#ffffff",
          // headerBackground:,
          hideWhenScrolling: true,
        }}
      />
    </Stack.Navigator>
  );
}
