import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [accessToken, setAccessToken] = useState(null);
  // const [id, setId] = useState(null);
  // const [roles, setRoles] = useState(null);
  const [test, setTest] = useState("Test String");

  const login = async (user, password) => {
    let values = { user, password };
    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://us-central1-millennialsprime.cloudfunctions.net/api/auth`,
        values,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(response.data.accessToken);
      // let accessToken = response.data.accessToken;
      // setAccessToken(accessToken);
      // AsyncStorage.setItem("accessToken", accessToken);

      // console.log(response.data._id);
      // let id = response.data._id;
      // setId(id);
      // AsyncStorage.setItem("_id", id);

      // console.log(response.data.roles);
      // let roles = response.data.roles;
      // setRoles(roles);
      // AsyncStorage.setItem("roles", roles.toString());

      // console.log("This is the Login Data ", response.data);
      // let auth = response.data;
      let auth = response.data;
      console.log(auth);
      let test = Object.entries(auth);
      console.log(test);
      setAuth(test);
      AsyncStorage.setItem("auth", test.toString());
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setAuth(null);
    AsyncStorage.removeItem(auth);
    // AsyncStorage.removeItem("accessToken");
    // AsyncStorage.removeItem("_id");
    // AsyncStorage.removeItem("roles");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let auth = await AsyncStorage.getItem("auth");
      setAuth(auth.toString());

      if (auth) {
        console.log("this is the Auth from isoggedIn in AuthContext ", auth);
        // let accessToken = await AsyncStorage.getItem("accessToken");
        // setAccessToken(accessToken);
        // let id = await AsyncStorage.getItem("_id");
        // setId(id);
        // let roles = await AsyncStorage.getItem("roles");
        // setRoles(roles);
      }

      setIsLoading(false);
    } catch (err) {
      console.log(`isLogged in error ${err}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        auth,
        setAuth,
        isLoading,
        // accessToken,
        // id,
        // roles,
        test,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
