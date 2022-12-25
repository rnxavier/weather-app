import React from "react";
import "./TodaysWeather.css";

const HourlyWeatherTile = ({ time, img, temp }) => {
  return (
    <div className="hourlyWeatherTileCard">
      <p>{time}</p>
      <img src={img} alt="" />
      <p>{temp} °C</p>
    </div>
  );
};

export default HourlyWeatherTile;
