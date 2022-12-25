import React from "react";
import { useContext } from "react";
import { HourlyContext } from "../contexts/HourlyContext";
import HourlyWeatherTile from "./HourlyWeatherTile";

const TodaysWeather = () => {
  const { todaysHourlyTemp, todaysHourlyTime, todaysHourlyImage } =
    useContext(HourlyContext);

  let weatherData = [];

  for (let i = 0; i < todaysHourlyImage.length; i++) {
    weatherData.push({
      time: todaysHourlyTime[i],
      img: todaysHourlyImage[i],
      temp: todaysHourlyTemp[i],
    });
  }

  return (
    <div>
      {weatherData.map((item) => (
        <HourlyWeatherTile time={item.time} img={item.img} temp={item.temp} />
      ))}
    </div>
  );
};

export default TodaysWeather;
