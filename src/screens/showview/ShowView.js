import { View, Text, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation, useTheme } from "@react-navigation/native";
import { globalStyles } from "../../../styles/global";
import PreviewCard from "../../../shared/ShowView/PreviewCard";
import PrimeCard from "../../../shared/ShowView/PrimeCard";
import axios from "../../API/axios";

export default function ShowView() {
  const { auth, isLoading } = useContext(AuthContext);
  const navigation = useNavigation;
  const colors = useTheme().colors;

  //   const [videos, setVideos] = useState({});
  var videos = [];
  var testArray = [];
  //   Get Library Videos from bunny.net
  const getVideos = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          AccessKey: "4c5ea068-0b40-40ae-8d9b2865c27c-f2d3-4fd9",
        },
      };

      const response = await axios.get(
        "https://video.bunnycdn.com/library/181057/videos?page=1&itemsPerPage=100&orderBy=date",
        options
      );

      console.log(
        `Response from Bunny.net ===> ${JSON.stringify(
          response.data.items,
          null,
          2
        )}`
      );
      testArray = response.data.items;
      //   console.log(
      //     "The test Array in fetch",
      //     JSON.stringify(testArray, null, 2)
      //   );
      //   console.log(
      //     "The first item in Test Array",
      //     JSON.stringify(testArray[0], null, 2)
      //   );
      console.log(testArray.length);
      //   setVideos(response.data.items);
      //   videos = response.data.items;
    } catch (err) {
      console.log(`Error in ShowView getVideo() ===> ${err}`);
    }
    // setIsLoading(false);

    // const options = {
    //   method: "GET",
    //   headers: {
    //     accept: "application/json",
    //     AccessKey: "4c5ea068-0b40-40ae-8d9b2865c27c-f2d3-4fd9",
    //   },
    // };

    // fetch(
    //   "https://video.bunnycdn.com/library/181057/videos?page=1&itemsPerPage=100&orderBy=date",
    //   options
    // )
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
  };

  getVideos();

  //   console.log(`These are the items in Video ${videos}`);
  console.log(testArray.length);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          globalStyles.padding,
          globalStyles.flex1,
          { color: colors.background },
        ]}
      >
        <Text style={{ color: colors.priT }}>ShowView</Text>
        {testArray.map((video, index) => (
          <PrimeCard title="test Title" description="Test Dec" />
        ))}
        {/* <PrimeCard title="test Title" description="Test Dec" />
        <PreviewCard title="test Title" description="Test Dec" />
        <PreviewCard title="test Title" description="Test Dec" />
        <PreviewCard title="test Title" description="Test Dec" />
        <PreviewCard title="test Title" description="Test Dec" /> */}
      </View>
    </ScrollView>
  );
}
