import { View, Text, useColorScheme, ActivityIndicator } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Image,
} from "@react-navigation/native";
import React, { useContext } from "react";

import { AuthContext } from "../../src/context/AuthContext";

import Home from "../../src/screens/Home";

import Register from "../../src/screens/auth/Register";
import SignIn from "../../src/screens/auth/SignIn";
import LogOut from "../../src/screens/auth/LogOut";
import PasswordRecovery from "../../src/screens/auth/PasswordRecovery";

import MyInfo from "../../src/screens/settings/MyInfo";
import Business from "../../src/screens/settings/Business";
import Art from "../../src/screens/settings/Art";
import About from "../../src/screens/auth/About";

import ShowView from "../../src/screens/showview/ShowView";

import Logo from "../../assets/images/MillennialsPrimeLogoNB.png";
import colors from "../../styles/colors";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNav = () => {
  const {
    login,
    logout,
    auth,
    setAuth,
    isLoading,
    accessToken,
    id,
    userInfo,
    roles,
  } = useContext(AuthContext);
  const theme = useColorScheme();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer theme={theme === "dark" ? colors.dark : colors.light}>
      {auth !== null ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

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
      {/* <Tab.Screen
        name="My Info"
        component={MyInfo}
        // options={{
        //   title: "Log In",
        //   headerStyle: {
        //     backgroundColor: "#8e202b",
        //   },
        //   headerTintColor: "#ffffff",
        // }}
      /> */}
      <Tab.Screen
        name="Episodes"
        component={ShowView}
        // options={{
        //   title: "Log In",
        //   headerStyle: {
        //     backgroundColor: "#8e202b",
        //   },
        //   headerTintColor: "#ffffff",
        // }}
      />
      <Tab.Screen
        name="Log Out"
        component={LogOut}
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

function AuthStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name='Onboarding' component={}/> HAVENT MADE ON BOARDING SCREEN YET*/}
      <Stack.Screen name="Sign In" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Password Recovery" component={PasswordRecovery} />
    </Stack.Navigator>
  );
}

export default AppNav;
