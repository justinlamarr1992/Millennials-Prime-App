import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [id, setId] = useState(null);
  const [roles, setRoles] = useState(null);

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
      // console.log(
      //   `The Response from the API for response.data.accessToken is ${response.data.accessToken}`
      // );
      let accessToken = response.data.accessToken;
      setAccessToken(accessToken);
      // console.log(`The setAccessToken value is ${accessToken}`);
      // PROPER ASYNC SET AND GET
      AsyncStorage.setItem("accessToken", JSON.stringify(accessToken));
      // var answer = await AsyncStorage.getItem("accessToken");
      // console.log(
      //   `AsyncStorage for accessToken is ${await AsyncStorage.getItem(
      //     "accessToken"
      //   )}`
      // );

      // console.log(
      //   `The Response from the API for response.data._id is ${response.data._id}`
      // );
      let id = response.data._id;
      setId(id);
      // console.log(`The setId value is ${id}`);
      AsyncStorage.setItem("_id", JSON.stringify(id));
      // console.log(
      //   `AsyncStorage for _id is ${await AsyncStorage.getItem("_id")}`
      // );

      // console.log(
      //   `The Response from the API for response.data.roles is ${response.data.roles}`
      // );
      let roles = response.data.roles;
      setRoles(roles);
      // console.log(`The setRoles value is ${roles}`);
      AsyncStorage.setItem("roles", JSON.stringify(roles));
      // console.log(
      //   `AsyncStorage for roles is ${await AsyncStorage.getItem("roles")}`
      // );

      // console.log("This is the Login Data ", response.data);
      let authHolder = JSON.stringify(response.data);
      // let testAuth = Object.entries(response.data);
      // console.log(`The secondary testAuth value is ${testAuth}`);
      // console.log(`The secondary testAuth2 value is ${testAuth2}`);
      // setAuth(JSON.stringify(response.data));
      // setAuth(JSON.stringify(testAuth));
      // setAuth(testAuth2);
      // setAuth(JSON.stringify(testAuth));
      // console.log(`The setAuth value is ${auth}`);
      AsyncStorage.setItem("auth", authHolder);
      // console.log(
      //   `AsyncStorage for auth is ${await AsyncStorage.getItem("auth")}`
      // );
      setAuth(authHolder);
    } catch (err) {
      console.log(`The Error for login() in AuthProvider is ${err}`);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    console.log(`UseState setAuth was changed to ${auth}`);
  }, [auth]);

  const logout = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://us-central1-millennialsprime.cloudfunctions.net/api/logout`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(`Results from LogOut()/ API logout ${response}`);

      // console.log(`Auth State Before ${auth}`);
      try {
        // console.log(
        //   `Auth State ===> ${await AsyncStorage.getItem(
        //     "auth"
        //   )} and ${await AsyncStorage.getItem(auth)}`
        // );
        await AsyncStorage.removeItem("auth");
      } catch (err) {
        console.log(`ERROR in the AUTHCONTEXT/LOGOUT() ===> ${err}`);
      }
      setAuth(null);
      // console.log(`Auth State After ${auth}`);

      // console.log(`ID State Before ${id}`);
      setId(null);
      AsyncStorage.removeItem("_id");
      // console.log(`ID State After ${id}`);

      // console.log(`Roles State Before ${roles}`);
      setRoles(null);
      AsyncStorage.removeItem("roles");
      // console.log(`Roles State AFter ${roles}`);

      // console.log(`Accessoken State Before ${accessToken}`);
      setAccessToken(null);
      AsyncStorage.removeItem("accessToken");
      // console.log(`Accessoken State After ${accessToken}`);
    } catch (err) {
      // console.log(`Here is the Error from AuthContext/LogOut() ===> ${err}`);
    }

    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);

      let authLoggedIn = await AsyncStorage.getItem("auth");
      console.log(
        `We need to get rid og this ${await AsyncStorage.getItem("auth")}`
      );
      setAuth(authLoggedIn);

      if (auth) {
        console.log(
          "this is the Auth from isLoggedIn in AuthContext ",
          authLoggedIn
        );
        let accessToken = await AsyncStorage.getItem("accessToken");
        setAccessToken(accessToken);
        let id = await AsyncStorage.getItem("_id");
        setId(id);
        let roles = await AsyncStorage.getItem("roles");
        setRoles(roles);
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
        accessToken,
        id,
        roles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
