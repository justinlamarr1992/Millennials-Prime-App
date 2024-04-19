import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Image,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useColorScheme } from "react-native";
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Home from "../src/BottomTab/Home";
import Register from "../src/BottomTab/Register";
import SignIn from "../src/BottomTab/SignIn";
import MyInfo from "../src/Stack/MyInfo";
import About from "../src/Stack/About";
import PasswordRecovery from "../src/Stack/PasswordRecovery";

import Logo from "../assets/images/MillennialsPrimeLogoNB.png";
import Business from "../src/Stack/settings/Business";
import Art from "../src/Stack/settings/Art";

export default function Navigation() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === "dark" ? colors.dark : colors.light}>
      <TabNavigator />
    </NavigationContainer>
  );
}

function LogoTitle() {
  return <Image style={{ width: 44, height: 40 }} source={Logo} />;
}
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute" },
        headerStyle: {
          backgroundColor: "#611821",
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
        component={StackNavigator}
        options={{
          // headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: "#611821",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Tab.Screen
        name="Sign In"
        component={SignIn}
        // options={{
        //   title: "Log In",
        //   headerStyle: {
        //     backgroundColor: "#8e202b",
        //   },
        //   headerTintColor: "#ffffff",
        // }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        // options={{
        //   title: "Register",
        //   headerStyle: {
        //     backgroundColor: "#8e202b",
        //   },
        //   headerTintColor: "#ffffff",
        // }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
    //   Default header for pages not speified
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: "#fffd9b",
    //   },
    //   headerTintColor: "#020101",
    // }}
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
        // options={({ navigation }) => {
        //   return {
        //     headerTitle: () => (
        //       <Header
        //         navigation={navigation}
        //         title="Welcome to Millennial's Prime"
        //       />
        //     ),
        //   };
        // }}
      />
      <Stack.Screen
        name="About"
        component={About}
        // options={{
        //   title: "It Should Work",
        //   headerStyle: {
        //     backgroundColor: "#8e202b",
        //   },
        //   headerTintColor: "#ffffff",
        //   // headerBackground:,
        //   hideWhenScrolling: true,
        // }}
      />
      <Stack.Screen
        name="My Info"
        component={MyInfo}
        // options={{
        //   title: "I Hope this is it",
        //   headerStyle: {
        //     backgroundColor: "#8e202b",
        //   },
        //   headerTintColor: "#ffffff",
        //   // headerBackground:,
        //   hideWhenScrolling: true,
        // }}
      />
      <Stack.Screen
        name="Business"
        component={Business}
        // options={{
        //   title: "I Hope this is it",
        //   headerStyle: {
        //     backgroundColor: "#8e202b",
        //   },
        //   headerTintColor: "#ffffff",
        //   // headerBackground:,
        //   hideWhenScrolling: true,
        // }}
      />
      <Stack.Screen
        name="Art"
        component={Art}
        // options={{
        //   title: "I Hope this is it",
        //   headerStyle: {
        //     backgroundColor: "#8e202b",
        //   },
        //   headerTintColor: "#ffffff",
        //   // headerBackground:,
        //   hideWhenScrolling: true,
        // }}
      />
    </Stack.Navigator>
  );
}
