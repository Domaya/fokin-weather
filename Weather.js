import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze : {
    iconName: "weather-hazy",
    gradient: ["#757f9a","#d7dde8"],
    title: "Haze",
    subtitle:"It will be Gloomy day"
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#232526", "#414345"],
    title: "Thunderstorm",
    subtitle:"JUST STAY HOME"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#2BC0E4", "#EAECC6"],
    title: "Drizzle",
    subtitle:"Maybe a stray cat is hiding in the bushes."
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#00416A", "#E4E5E6"],
    title: "Rain",
    subtitle:"Don't forget your unbrella!"
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#274046", "#E6DADA"],
    title: "Snow",
    subtitle: "We wish a merry chirstmas"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#757f9a","#d7dde8"],
    title:"Atmosphere",
    subtitle:"Frankly, I don't know what it is."
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2980B9", "#6DD5FA"],
    title:"Clear",
    subtitle:"Birds are singing, and flowers are blooming"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#2c3e50", "#bdc3c7"],
    title: "Clouds",
    subtitle:"It will be Gloomy day"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#757f9a","#d7dde8"],
    title:"Mist",
    subtitle:"Watch out your step"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#BA8B02", "#181818"],
    title:"Dust",
    subtitle:"Free hongkong"
  }
}

export default function Weather({temp, condition}){
  return (
    <LinearGradient style={styles.container} colors={weatherOptions[condition].gradient}>
      <StatusBar style={styles.halfContainer} />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons color="white" size={96} name={weatherOptions[condition].iconName}></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>
          {weatherOptions[condition].title}
        </Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp:PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Haze",
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Dust"
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems:"center"
  },
  temp:{
    fontSize:42,
    color:"white"
  },
  halfContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    color:"white",
    fontSize:54,
    fontWeight:"300",
    marginBottom:10
  },
  subtitle:{
    fontWeight:"600",
    fontSize:24,
    color:"white"
  },
  textContainer: {
   paddingHorizontal:40,
   paddingLeft:0,
   alignItems:"flex-start"
  }
})