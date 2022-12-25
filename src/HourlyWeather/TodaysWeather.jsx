import React from "react";
import { useContext } from "react";
import { HourlyContext } from "../contexts/HourlyContext";

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

  console.log(weatherData);
};

export default TodaysWeather;
