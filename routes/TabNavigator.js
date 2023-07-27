import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ReviewDetails" component={ReviewDetails} />
    </Tab.Navigator>
  );
}
