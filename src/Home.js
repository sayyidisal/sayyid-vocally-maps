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
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [pin, setPin] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [region, setRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [firstName, onChangeFirstName] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(1.0, 0, 0, 0.2)" translucent />

      <View style={{ flex: 1 }}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          loadingEnabled={true}
          customMapStyle={dark ? mapStyle : null}
          zoomEnabled={true}
          zoomTapEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          />
          <Marker
            coordinate={pin}
            pinColor="black"
            draggable={true}
            onDragStart={(e) => {
              console.log("Drag start", e.nativeEvent.coordinates);
            }}
            onDragEnd={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          >
            <Callout>
              <Text>I'm here</Text>
            </Callout>
          </Marker>
          <Circle center={pin} radius={1000} />
        </MapView>
        <View style={dark ? styles.searchdark : styles.searchlight}>
          <FontAwesome
            style={{ alignItems: "flex-start", left: -90 }}
            name="search"
            size={15}
            color={dark ? "white" : "black"}
          />
          <TextInput
            onChangeText={onChangeFirstName}
            placeholder="Search Here"
            placeholderTextColor={dark ? "white" : "black"}
            value={firstName}
            style={{ left: -70 }}
          />
        </View>

        <TouchableOpacity
          onPress={() => setDark(!dark)}
          style={dark ? styles.touchdark : styles.touchlight}
        >
          <FontAwesome
            name="sliders"
            size={15}
            style={dark ? styles.toggleDark : styles.tooglelight}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setDark(!dark)}
          style={dark ? styles.touchdark2 : styles.touchlight2}
        >
          <FontAwesome
            name="paper-plane"
            size={15}
            style={dark ? styles.toggleDark2 : styles.tooglelight2}
          />
        </TouchableOpacity>

        <View
          style={dark ? styles.carddark : styles.cardlight}
        >
          <Image
            style={{
              resizeMode: "cover",
              width: 80,
              height: 80,
              borderRadius: 10,
              alignSelf: "center",
              left: -30,
            }}
            source={{
              uri: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-1520x800.jpeg",
            }}
          />
          <View
            style={{
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "left",
                fontWeight: "bold",
                paddingBottom: 5,
                color: dark ? 'white' : 'black'
              }}
            >
              Lokál Hamburk
            </Text>
            <Text
              style={{ fontSize: 12, textAlign: "left", fontWeight: "100", color: dark ? 'white' : 'black' }}
            >
              Pub In Prague
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 50,
  },
  touchlight: {
    backgroundColor: "#FFFFFF",
    height: 30,
    borderRadius: 15,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 130,
    alignSelf: "flex-end",
    right: 20,
  },
  touchdark: {
    backgroundColor: "#154c79",
    height: 30,
    borderRadius: 15,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 130,
    alignSelf: "flex-end",
    right: 20,
  },
  tooglelight: {
    color: "black",
  },
  toggleDark: {
    color: "white",
  },
  touchlight2: {
    backgroundColor: "#FFF",
    height: 30,
    borderRadius: 15,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 180,
    alignSelf: "flex-end",
    right: 20,
  },
  touchdark2: {
    backgroundColor: "#154c79",
    height: 30,
    borderRadius: 15,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 180,
    alignSelf: "flex-end",
    right: 20,
  },
  tooglelight2: {
    color: "black",
  },
  toggleDark2: {
    color: "white",
  },
  searchlight: {
    backgroundColor: "#FFF",
    height: 40,
    borderRadius: 15,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 70,
    flexDirection: "row",
    alignSelf: "center",
  },
  searchdark: {
    backgroundColor: "#154c79",
    height: 40,
    borderRadius: 15,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 70,
    flexDirection: "row",
    alignSelf: "center",
  },
  cardlight: {
    backgroundColor: "#FFF",
    height: 100,
    borderRadius: 15,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  carddark: {
    backgroundColor: "#154c79",
    height: 100,
    borderRadius: 15,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
});

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9E9E9E",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#BDBDBD",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2C2C2C",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8A8A8A",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3C3C3C",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4E4E4E",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3D3D3D",
      },
    ],
  },
];
