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
          // source={{
          //   uri: "https://iframe.dacast.com/vod/4cb5f7e0-f945-e8aa-b1a8-62e9bf774b85/d71bda38-3ae5-40aa-8c24-93179412e432",
          // }}
          source={{
            uri: "https://iframe.dacast.com/vod/4cb5f7e0-f945-e8aa-b1a8-62e9bf774b85/d71bda38-3ae5-40aa-8c24-93179412e432",
          }}
          // source={{
          //   uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          // }}
          // source={{ uri: "https://www.youtube.com/embed/cqyziA30whE" }}
          style={{ ...globalStyles.postVideo, ...globalStyles.postContent }}
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
