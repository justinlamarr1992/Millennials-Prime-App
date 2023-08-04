import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Video, ResizeMode } from "expo-av";
import videoFile from "../assets/videos/video.mp4";
import { globalStyles } from "../styles/global";
import { LinearGradient } from "expo-linear-gradient";

export default function PostComponent({ title, description }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <LinearGradient
      style={globalStyles.post}
      colors={["#bd2932", "#a5242f", "#8e202b", "#771c26", "#611821"]}
    >
      <Text style={{ ...globalStyles.primeTitle, ...globalStyles.postContent }}>
        Prime News
      </Text>
      <Video
        ref={video}
        style={{ ...globalStyles.postVideo, ...globalStyles.postContent }}
        source={videoFile}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />

      <Text style={{ ...globalStyles.postTitle, ...globalStyles.postContent }}>
        {title}
      </Text>
      <Text
        style={{ ...globalStyles.postDescription, ...globalStyles.postContent }}
      >
        {description}
      </Text>
      {/* <Text style={{ ...globalStyles.postLikes, ...globalStyles.postContent }}>
        Likes
      </Text> */}
    </LinearGradient>
  );
}

{
  /* <iframe
  className="pr-video p-con-shade"
  // id="d71bda38-3ae5-40aa-8c24-93179412e432"
  src="https://iframe.dacast.com/vod/4cb5f7e0-f945-e8aa-b1a8-62e9bf774b85/d71bda38-3ae5-40aa-8c24-93179412e432"
  width="100%"
  height="100%"
  // frameborder="0"
  // scrolling="no"
  // allow="autoplay;encrypted-media"
  allowFullScreen
  // webkitallowfullscreen
  // mozallowfullscreen
  // oallowfullscreen
  // msallowfullscreen
  // style="position:absolute;top:0;left:0;"
></iframe>; */
}
