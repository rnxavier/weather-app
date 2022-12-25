import "./WeatherTiles.css";

import { TemperatureContext } from "../../contexts/TemperatureContext";
import { ImageContext } from "../../contexts/ImageContext";
import { DescriptionContext } from "../../contexts/DescriptionContext";
import { useContext, useState } from "react";
import { DateContext } from "../../contexts/DateContext";

const WeatherTiles = () => {
  const { dayOneDate, dayTwoDate, dayThreeDate } = useContext(DateContext);

  const { dayOneTemp, dayTwoTemp, dayThreeTemp } =
    useContext(TemperatureContext);

  const { dayOneImg, dayTwoImg, dayThreeImg } = useContext(ImageContext);

  const { dayOneDescription, dayTwoDescription, dayThreeDescription } =
    useContext(DescriptionContext);

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

  let dayTwo = new Date(dayTwoDate).toString().substring(0, 15);
  let dayThree = new Date(dayThreeDate).toString().substring(0, 15);

  return (
    <div className="weatherTileContainer">
      <div className="tileDiv">
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
          <strong>{dayTwo}</strong>
        </p>
      </div>

      <div className="tileDiv">
        <img src={dayThreeImg} alt="" />
        <p>Average Temperature: {dayThreeTemp}°C</p>
        <p>{dayThreeDescription}</p>
        <p>
          <strong>{dayThree}</strong>
        </p>
      </div>
    </div>
  );
};

export default WeatherTiles;
