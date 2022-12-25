import "./WeatherTiles.css";
import { useNavigate } from "react-router-dom";
import { TemperatureContext } from "../../contexts/TemperatureContext";
import { ImageContext } from "../../contexts/ImageContext";
import { DescriptionContext } from "../../contexts/DescriptionContext";
import { useContext, useState } from "react";

const WeatherTiles = () => {
  const navigate = useNavigate();
  const date = new Date();

  const [today, setToday] = useState(date.toDateString());

  const { dayOneTemp, dayTwoTemp, dayThreeTemp } =
    useContext(TemperatureContext);

  const { dayOneImg, dayTwoImg, dayThreeImg } = useContext(ImageContext);

  const { dayOneDescription, dayTwoDescription, dayThreeDescription } =
    useContext(DescriptionContext);

  const handleTodayClick = () => {
    navigate("/todaysWeather");
  };

  if (dayOneTemp === undefined) {
    return (
      <div style={{ paddingTop: "7%", paddingBottom: "7%" }}>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Search the weather forecast for the next three days
        </h1>
      </div>
    );
  }

  return (
    <div className="weatherTileContainer">
      <div className="tileDiv" onClick={handleTodayClick}>
        <img src={dayOneImg} alt="" />
        <p>Average Temperature: {dayOneTemp}°C</p>
        <p>{dayOneDescription}</p>
        <p>
          <strong>Today</strong>
        </p>
      </div>

      <div className="tileDiv">
        <img src={dayTwoImg} alt="" />
        <p>Average Temperature: {dayTwoTemp}°C</p>
        <p>{dayTwoDescription}</p>
        <p>
          <strong>Tomorrow</strong>
        </p>
      </div>

      <div className="tileDiv">
        <img src={dayThreeImg} alt="" />
        <p>Average Temperature: {dayThreeTemp}°C</p>
        <p>{dayThreeDescription}</p>
        <p>
          <strong>Day after tomorrow</strong>
        </p>
      </div>
    </div>
  );
};

export default WeatherTiles;
