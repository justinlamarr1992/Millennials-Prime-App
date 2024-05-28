import { View, Text } from "react-native";
import React from "react";
import UploadBox from "../../shared/Upload/UploadBox";
import { globalStyles } from "../../../styles/global";

const UploadContentScreen = () => {
  return (
    <View style={[globalStyles.centerItem, globalStyles.padding]}>
      <UploadBox />
    </View>
  );
};

export default UploadContentScreen;
