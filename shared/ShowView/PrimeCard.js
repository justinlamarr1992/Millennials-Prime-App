import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";
import { useTheme } from "@react-navigation/native";

export default function PrimeCard({
  thumbnail,
  title,
  description,
  name,
  time,
  key,
}) {
  const colors = useTheme().colors;
  return (
    <View
      key={key}
      style={[
        globalStyles.showView,
        globalStyles.centerItem,
        globalStyles.vertMargin,
        { backgroundColor: colors.primCar },
      ]}
    >
      <Text style={[globalStyles.showViewTitle, { color: colors.primCarT }]}>
        {title}
      </Text>
      <Text
        style={[
          globalStyles.showViewDescription,
          globalStyles.bottomPadding10,
          { color: colors.primCarT },
        ]}
      >
        {description}
      </Text>
    </View>
  );
}
