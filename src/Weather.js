import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "@fontsource/roboto"; // Defaults to weight 400.
import axios from "axios";
import FormatedDate from "./FormatedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

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
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container weather-app">
        <div className="row search-row">
          <div className="col-md-auto">
            <form>
              <input
                type="search"
                placeholder="Type a city..."
                autoFocus="on"
                className="searc-field"
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

        <div className="row justify-content-between mt-md-5 weather-info-row">
          <div className="col-md-7 main-info">
            <h1>
              <span className="cityName">{weatherData.cityName},</span>{" "}
              <span className="CountryName">{weatherData.country}</span>
            </h1>
            <h3 className="DayOfWeek ">
                <FormatedDate date={weatherData.date} />
              </h3>
              <p className="WeatherDescription text-capitalize">
              {weatherData.description}
            </p>
            <div className="temp-row d-flex flex-row align-items-start">
              <div className="Icon ">
                <img
                  src={weatherData.icon}
                  className="img img-fluid weather-icon align-self-start"
                />
              </div>
              <div className="temp align-self-start">
                {weatherData.temperature}
              </div>{" "}
              <div className="units">℃ | ℉</div>
            </div>
          </div>
          <div className="col-md-4 other-parameters d-flex justify-content-end align-items-end">
            <ul className="">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Pressure: {weatherData.pressure} hPa</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Jelenia gora";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=4e3d43265f7f3448fot5bf7a6b40260b&units=metric`;
    axios.get(apiUrl).then(handleSearch);

    return <h1>Loading..</h1>;
  }
}
