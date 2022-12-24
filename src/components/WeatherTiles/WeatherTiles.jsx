import "./WeatherTiles.css";

import { TemperatureContext } from "../../contexts/TemperatureContext";
import { ImageContext } from "../../contexts/ImageContext";
import { useContext } from "react";

const WeatherTiles = () => {
  const { dayOneTemp, dayTwoTemp, dayThreeTemp } =
    useContext(TemperatureContext);

  const { dayOneImg, dayTwoImg, dayThreeImg } = useContext(ImageContext);

  if (dayOneTemp === undefined) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          Search the weather forecast for the next three days
        </h1>
      </div>
    );
  }

  return (
    <div className="weatherTileContainer">
      <div className="tileDiv">
        <img src={dayOneImg} alt="" />
        <p>Average Temperature: {dayOneTemp}°C</p>
        <p>Sunday</p>
      </div>

      <div className="tileDiv">
        <img src={dayTwoImg} alt="" />
        <p>Average Temperature: {dayTwoTemp}°C</p>
        <p>Monday</p>
      </div>

      <div className="tileDiv">
        <img src={dayThreeImg} alt="" />
        <p>Average Temperature: {dayThreeTemp}°C</p>
        <p>Tuesday</p>
      </div>
    </div>
  );
};

export default WeatherTiles;
