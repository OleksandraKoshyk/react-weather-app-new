import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function roundNumber(number) {
    return Math.round(number);
  }
  function formatDay(time) {
    let myTime = new Date(time * 1000);
    let day = myTime.getDay();
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div>
        {dayNames[day]} 
      </div>
    );
  }
  return (
    <div>
      <div className="WeatherForecast-day"> {formatDay(props.data.time)}</div>
      <WeatherIcon code={props.data.condition.icon} size={75} />
      <div className="WeatherForecast-temperature">
        {" "}
        <span className="WeatherForecast-temperature-max">
          {roundNumber(props.data.temperature.maximum)}{" "}
        </span>
        <span className="WeatherForecast-temperature-min">
          {roundNumber(props.data.temperature.minimum)}
        </span>
      </div>
    </div>
  );
}
