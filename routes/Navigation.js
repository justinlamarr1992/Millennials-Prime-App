import React from "react";
import { AuthProvider } from "../src/context/AuthContext";
import AppNav from "./navigation/AppNav";
import { useColorScheme } from "react-native";

import colors from "../styles/colors";

export default function Navigation() {
  const theme = useColorScheme();
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

function AuthStack() {}
