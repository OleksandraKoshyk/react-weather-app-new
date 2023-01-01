import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature d-flex flex-row align-items-start">
        <div className="temp">{props.celsius} </div>{" "}
        <div className="units">
          ℃ |{" "}
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheitTemp = (props.celsius * 9) / 5 + 32;
    return (
      <div className="weatherTemperature d-flex flex-row align-items-start">
        <div className="temp">{Math.round(fahrenheitTemp)} </div>{" "}
        <div className="units">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>{" "}
          | ℉
        </div>
      </div>
    );
  }
}
