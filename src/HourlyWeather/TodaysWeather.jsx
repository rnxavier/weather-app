import { useContext } from "react";
import { HourlyContext } from "../contexts/HourlyContext";
import HourlyWeatherTile from "./HourlyWeatherTile";

const TodaysWeather = () => {
  const { todaysHourlyTemp, todaysHourlyTime, todaysHourlyImage } =
    useContext(HourlyContext);

  let weatherData = [];

  for (let i = 0; i < todaysHourlyImage.length; i++) {
    weatherData = [
      {
        time: todaysHourlyTime[i],
        img: todaysHourlyImage[i],
        temp: todaysHourlyTemp[i],
      },
    ];
  }

  console.log(weatherData);

  return <div>Hourly Temp</div>;
};

export default TodaysWeather;
