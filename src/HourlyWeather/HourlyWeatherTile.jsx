import React from "react";

const HourlyWeatherTile = ({ time, imgSrc, temp }) => {
  return (
    <div>
      <p>{time}</p>
      <img src={imgSrc} alt="" />
      <p>{temp}</p>
    </div>
  );
};

export default HourlyWeatherTile;
