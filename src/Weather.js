import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "@fontsource/roboto"; // Defaults to weight 400.
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  return (
    <div className="row justify-content-between mt-md-5 weather-info-row">
      <div className="col-md-7 main-info">
        <h1>
          <span className="cityName">{props.data.cityName},</span>{" "}
          <span className="CountryName">{props.data.country}</span>
        </h1>
        <h3 className="DayOfWeek ">
          <FormatedDate date={props.data.date} />
        </h3>
        <p className="WeatherDescription text-capitalize">
          {props.data.description}
        </p>
        <div className="temp-row d-flex flex-row align-items-start">
          <div className="Icon ">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="img img-fluid weather-icon align-self-start"
            />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <div className="col-md-4 other-parameters d-flex justify-content-end align-items-end">
        <ul className="">
          <li>
            <WeatherIcon code={props.data.icondescription} />
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
          <li>Pressure: {props.data.pressure} hPa</li>
        </ul>
      </div>
    </div>
  );
}
