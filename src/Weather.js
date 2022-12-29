import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "@fontsource/roboto"; // Defaults to weight 400.

export default function Weather() {
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
            <span className="CityName">CityName,</span>{" "}
            <span className="CountryName">CountryName</span>
          </h1>

          <h3 className="DayOfWeek">DayOfWeek</h3>
          <p>
            <span>Hours</span>:<span>Minute</span>
          </p>
          <p className="WeatherDescription">WeatherDescription</p>
          <div className="Icon">Icon of Weather</div>
          <div className="temp">Temp ℃ | ℉</div>
        </div>
        <div className="col-md-4 other-parameters d-flex justify-content-end align-items-end">
          <ul className="">
            <li>Humidity __%</li>
            <li>Wind ___ km/h</li>
          </ul>
        </div>
      </div>
      </div>
      );
}
