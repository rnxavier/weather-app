import React from "react";
import "./TodaysWeather.css";

const CarouselWeatherTile = ({ time, img, temp }) => {
  return (
    <div className="carouselWeatherTileCard">
      <p>{time}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={img} alt="" />
      </div>
      <p>{temp} °C</p>
    </div>
  );
};

export default CarouselWeatherTile;
