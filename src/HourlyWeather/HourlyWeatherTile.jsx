import React from "react";

const HourlyWeatherTile = ({ time, img, temp }) => {
  return (
    <div>
      <p>{time}</p>
      <img src={img} alt="" />
      <p>{temp}</p>
    </div>
  );
};

export default HourlyWeatherTile;
