import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import { useTheme } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import { Video, ResizeMode } from "expo-av";
import { globalStyles } from "../../../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import UserInfo from "./UserInfo";
import colors from "../../../styles/colors";

export default function VideoPost({ title, description }) {
  const colors = useTheme().colors;

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <LinearGradient
      style={globalStyles.post}
      colors={["#b9a054", "#cbb665", "#ddcd76", "#eee588", "#fffd9b"]}
    >
      {/* User info here */}
      <UserInfo />
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

      {/* itle */}

      <Text
        style={[
          globalStyles.postTitle,
          globalStyles.postContent,
          { color: colors.triT },
        ]}
      >
        This is a Video Post Title
      </Text>
      {/* description */}
      <Text
        style={[
          globalStyles.postDescription,
          globalStyles.postContent,
          { color: colors.priT },
        ]}
      >
        This is where the description of the pst willl go, but it will be
        shortened to only two lines max...
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
