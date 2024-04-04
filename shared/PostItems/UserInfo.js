import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../../styles/global";

import pic from "../../assets/images/MillennialsPrimeLogoNB.png";

export default function UserInfo({ prime, name, time }) {
  // console.log(prime, name, time);
  return (
    <View style={globalStyles.postUserInfo}>
      <View style={globalStyles.postUserInfoPicContainer}>
        {/* TODO: Add dynamic picture */}
        <Image style={globalStyles.postUserInfoImage} source={pic} />
      </View>
      <View style={globalStyles.postUserInfoTextContainer}>
        <Text
          style={
            prime
              ? globalStyles.primePostUserInfoName
              : globalStyles.postUserInfoName
          }
        >
          {name ? name : "Loading"}
        </Text>
        <Text style={globalStyles.postUserInfoTime}>
          {time ? time : "Loading"}
        </Text>
      </View>
    </View>
  );
}
