import "./WeatherTiles.css";
import placeholderImg from "../../images/weather-img.png";
import { TemperatureContext } from "../../contexts/TemperatureContext";
import { useContext } from "react";

const WeatherTiles = () => {
  const { dayOneTemp, dayTwoTemp, dayThreeTemp } =
    useContext(TemperatureContext);

  return (
    <div className="weatherTileContainer">
      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Average Temperature: {dayOneTemp}°C</p>
        <p>Sunday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Average Temperature: {dayTwoTemp}°C</p>
        <p>Monday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Average Temperature: {dayThreeTemp}°C</p>
        <p>Tuesday</p>
      </div>
    </div>
  );
};

export default WeatherTiles;
