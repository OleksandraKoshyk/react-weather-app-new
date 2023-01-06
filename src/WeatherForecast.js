import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecastData, setForecastData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showForecast(response) {
    setForecastData(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData.city);
    console.log(forecastData.daily[1]);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecastData.daily[1]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=4e3d43265f7f3448fot5bf7a6b40260b&units=metric`;
    axios.get(apiUrl).then(showForecast);
    console.log("hey");
    return null;
  }
}
