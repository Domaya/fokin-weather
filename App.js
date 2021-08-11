import React from 'react';
import { Alert, Text } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "17d45cbf0899e73885be9901ec9de7be";

export default class extends React.Component {
  state = {
    isLoading : true
  }
  getWeather = async(latitude, longitude) => {
    const {
      data : {
        main: {temp},
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading:false,
      condition: weather[0].main,
      temp
    })
  }
  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    // return <Loading />
    return isLoading ? <Loading></Loading> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

// export default function App() {
//   return <Loading />;
// }