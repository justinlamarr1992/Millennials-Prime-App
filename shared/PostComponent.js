import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import { WebView } from "react-native-webview";
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
      <WebView
        // source={{
        //   uri: "https://iframe.dacast.com/vod/4cb5f7e0-f945-e8aa-b1a8-62e9bf774b85/d71bda38-3ae5-40aa-8c24-93179412e432",
        // }}
        // source={{
        //   uri: "https://video.bunnycdn.com/play/147838/38cfaf07-c691-466b-9f6f-5c342f4a19af",
        // }}
        // source={{
        //   uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        // }}
        source={{ uri: "https://www.youtube.com/embed/cqyziA30whE" }}
        style={{ ...globalStyles.postVideo, ...globalStyles.postContent }}
      />

      {/* <Video
        ref={video}
        style={{ ...globalStyles.postVideo, ...globalStyles.postContent }}
        source={{
          uri: "https://iframe.dacast.com/vod/4cb5f7e0-f945-e8aa-b1a8-62e9bf774b85/d71bda38-3ae5-40aa-8c24-93179412e432",
        }}
        // source={{
        //   uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        // }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      /> */}

      {/* <Video
        ref={video}
        style={{ ...globalStyles.postVideo, ...globalStyles.postContent }}
        source={videoFile}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      /> */}

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

// src="https://iframe.dacast.com/vod/4cb5f7e0-f945-e8aa-b1a8-62e9bf774b85/d71bda38-3ae5-40aa-8c24-93179412e432"

//   <script
//   id="4cb5f7e0-f945-e8aa-b1a8-62e9bf774b85-vod-d71bda38-3ae5-40aa-8c24-93179412e432"
//   width="100%"
//   height="100%"
//   src="https://player.dacast.com/js/player.js?contentId=4cb5f7e0-f945-e8aa-b1a8-62e9bf774b85-vod-d71bda38-3ae5-40aa-8c24-93179412e432"
//   class="dacast-video"
// ></script>;

// https://iframe.dacast.com/vod/4cb5f7e0-f945-e8aa-b1a8-62e9bf774b85/d71bda38-3ae5-40aa-8c24-93179412e432
