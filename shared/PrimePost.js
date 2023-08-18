import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import { WebView } from "react-native-webview";
import { Video, ResizeMode } from "expo-av";
import videoFile from "../assets/videos/video.mp4";
import { globalStyles } from "../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import UserInfo from "./PostItems/UserInfo";

export default function PrimePost({ prime, title, description, name, time }) {
  // Determins if the post will be red or gold

  return (
    <View>
      <LinearGradient
        style={globalStyles.post}
        colors={
          prime
            ? ["#b9a054", "#cbb665", "#ddcd76", "#eee588", "#fffd9b"]
            : ["#bd2932", "#a5242f", "#8e202b", "#771c26", "#611821"]
        }
      >
        <WebView
          source={{
            uri: "https://video.bunnycdn.com/play/147838/38cfaf07-c691-466b-9f6f-5c342f4a19af",
          }}
          width="100%"
          height="auto"
          style={{
            border: "none",
            maxWidth: 1280,
            maxHeight: 720,
            ...globalStyles.postVideo,
            ...globalStyles.postContent,
          }}
          // source={{ uri: "https://www.youtube.com/embed/cqyziA30whE" }}
          // style={{ ...globalStyles.postVideo, ...globalStyles.postContent }}
        />

        <Text
          style={
            prime
              ? { ...globalStyles.primePostTitle, ...globalStyles.postContent }
              : { ...globalStyles.postTitle, ...globalStyles.postContent }
          }
        >
          {title}
        </Text>
        <Text
          style={{
            ...globalStyles.postDescription,
            ...globalStyles.postContent,
          }}
        >
          {description}
        </Text>
        <UserInfo prime={prime} name={name} time={time} />
      </LinearGradient>
    </View>
  );
}
