import React, { useState } from "react";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  Circle,
} from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Button,
  StatusBar,
  TextInput,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import RootNavigator from "./src/RootNavigator";

export default function App() {
  return(
    <>
    <StatusBar hidden/>
    <RootNavigator/>
    </>
  )
}