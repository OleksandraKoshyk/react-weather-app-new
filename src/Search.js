import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "@fontsource/roboto"; // Defaults to weight 400.
import axios from "axios";

import Weather from "./Weather";

export default function Search() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Jelenia Gora");

  function handleSearch(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      cityName: response.data.city,
      country: response.data.country,
      icon: response.data.condition.icon_url,
      icondescription: response.data.condition.icon,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=4e3d43265f7f3448fot5bf7a6b40260b&units=metric`;
    axios.get(apiUrl).then(handleSearch);
  }

  if (weatherData.ready) {
    return (
      <div className="container weather-app">
        <div className="row search-row">
          <div className="col-md-auto">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type a city..."
                autoFocus="on"
                className="searc-field"
                onChange={handleCityChange}
              ></input>

              <input
                type="submit"
                className="btn search-btn"
                value={"Search"}
              />
            </form>
          </div>
          <div className="col-md-auto">
            <button type="button" className="btn current-btn">
              Current
            </button>
          </div>
        </div>
        <Weather data={weatherData} />
      </div>
    );
  } else {
    search();
    return <h1>Loading..</h1>;
  }
}
