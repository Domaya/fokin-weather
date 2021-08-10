import React from 'react';
import { Alert, Text } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "17d45cbf0899e73885be9901ec9de7be";

export default class extends React.Component {
  state = {
    isLoading : true
  }
  // getWeather = async(){

  // }
  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading></Loading> : null;
  }
}

// export default function App() {
//   return <Loading />;
// }