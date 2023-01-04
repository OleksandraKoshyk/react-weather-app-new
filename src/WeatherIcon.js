import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  let iconMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "SLEET",
    "shower-rain-night": "SLEET",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "WIND",
    "mist-night": "WIND",
  };
  let colorMapping = {
    "clear-sky-day": "goldenrod",
    "clear-sky-night": "darkBlue",
    "few-clouds-day": "lightblue",
    "few-clouds-night": "blue",
    "scattered-clouds-day": "cyan",
    "scattered-clouds-night": "darkSlateBlue",
    "broken-clouds-day": "deepSkyBlue",
    "broken-clouds-night": "indigo",
    "shower-rain-day": "DodgerBlue",
    "shower-rain-night": "Indigo",
    "rain-day": "PowderBlue",
    "rain-night": "MediumBlue",
    "thunderstorm-day": "slateBlue",
    "thunderstorm-night": "MidnightBlue",
    "snow-day": "MintCream",
    "snow-night": "white",
    "mist-day": "lightSkyBlue",
    "mist-night": "MidnightBlue",
  };
  return (
    <ReactAnimatedWeather
      icon={iconMapping[props.code]}
      color={colorMapping[props.code]}
      size={props.size}
      animate={true}
    />
  );
}
