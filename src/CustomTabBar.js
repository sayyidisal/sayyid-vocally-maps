import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
const Tab = createBottomTabNavigator();
import Icon from "@expo/vector-icons/Ionicons";

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case "Maps":
      iconName = "compass";
      break;
      case "Direction":
      iconName = "podium";
      break;
    case "Home":
      iconName = "add-circle-outline";
      break;
    case "Notification":
      iconName = "notifications";
      break;
    case "Profile":
      iconName = "person";
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

const CustomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Tab.Screen name="Maps" component={Home} />
      <Tab.Screen name="Direction" component={Home} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};

export default CustomTabBar;
