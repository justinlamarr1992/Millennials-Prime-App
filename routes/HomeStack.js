import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Image } from "react-native";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

import { globalStyles } from "../styles/global";

import Logo from "../assets/images/MillennialsPrimeLogoNB.png";

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  function LogoTitle() {
    return <Image style={{ width: 44, height: 40 }} source={Logo} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        //   Default header for pages not speified
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fffd9b",
          },
          headerTintColor: "#020101",
        }}
      >
        <Stack.Screen
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
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: "It Should Work",
            headerStyle: {
              backgroundColor: "#8e202b",
            },
            headerTintColor: "#ffffff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
