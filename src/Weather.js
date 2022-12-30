import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "@fontsource/roboto"; // Defaults to weight 400.
import axios from "axios";

export default function Weather() {
  function handleSearch(response) {
    setTemperature(Math.round(response.data.temperature.current));
    setWind(Math.round(response.data.wind.speed));
    setHumidity(response.data.temperature.humidity);
    setPressure(response.data.temperature.pressure);
    setcityName(response.data.city);
    setCountry(response.data.country);
    setIcon(response.data.condition.icon_url);
    setDescription(response.data.condition.description);
  }
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState("null");
  const [description, setDescription] = useState("null");
  const [cityName, setcityName] = useState("null");
  const [country, setCountry] = useState("null");
  const [wind, setWind] = useState("null");
  const [humidity, setHumidity] = useState("null");
  const [pressure, setPressure] = useState("null");
  const [icon, setIcon] = useState("null");

  if (ready) {
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
              <span className="{cityName}">{cityName},</span>{" "}
              <span className="CountryName">{country}</span>
            </h1>

            <h3 className="DayOfWeek">DayOfWeek</h3>
            <p>
              <span>Hours</span>:<span>Minute</span>
            </p>
            <p className="WeatherDescription">{description}</p>
            <div className="temp-row d-flex flex-row align-items-start">
              <div className="Icon ">
                <img
                  src={icon}
                  className="img img-fluid weather-icon align-self-start"
                />
              </div>
              <div className="temp align-self-start">{temperature}</div>{" "}
              <div className="units">℃ | ℉</div>
            </div>
          </div>
          <div className="col-md-4 other-parameters d-flex justify-content-end align-items-end">
            <ul className="">
              <li>Humidity: {humidity}%</li>
              <li>Wind: {wind} km/h</li>
              <li>Pressure: {pressure} hPa</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Jelenia gora";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=4e3d43265f7f3448fot5bf7a6b40260b&units=metric`;
    axios.get(apiUrl).then(handleSearch);
    setReady("true");
    return <h1>Loading..</h1>;
  }
}
