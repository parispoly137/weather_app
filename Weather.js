import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Clouds: {
    iconName: "cloud",
    gradient: ['#bdc3c7', '#2c3e50'],
    title: "Cloudy",
    subtitle: "The sky is cloudy. When whill it be clear again?"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ['#ffffc7', '#6dd5fa', '#2980b9'],
    title: "Sunny",
    subtitle: "The sun is shining brightly~"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ['#e7e9bb', '#818181', '#403b4a'],
    title: "Thunderstorm",
    subtitle: "Be careful not to get struck by lightning!"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ['#2980b9', '#2c3e50', '#22303e'],
    title: "Drizzle",
    subtitle: "It is raining very lightly."
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ['#536976', '#292e49', '#0f1949'],
    title: "Rain",
    subtitle: "Rainy days are the best time to stay home and read a book."
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ['#e6dada', '#274046'],
    title: "Snow",
    subtitle: "Do you wanna build a snow man?"
  },
  Mist: {
    iconName: "weather-tornado",
    gradient: ['#c0f7fb', '#7c7c7e', '#818181'],
    title: "Mist",
    subtitle: "You don't have to spray mist."
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ['#efcd8e', '#d7d2cc', '#BABBC0'],
    title: "Haze",
    subtitle: "There is light mist, caused by particles of water or dust in the air."
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ['#7c7c7e', '#d7d2cc', '#7c7c7e'],
    title: "Dust",
    subtitle: "Wearing a mask is recommended."
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={150} color="white" />
        <Text style={styles.temp}>{temp} ℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Haze",
    "Dust",
    "Clear",
    "Clouds"
  ])
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    color: "white",
    paddingBottom: 40,
    marginTop: 100
  },
  subtitle: {
    fontSize: 30,
    color: "white"
  },
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "80%"
  }
});