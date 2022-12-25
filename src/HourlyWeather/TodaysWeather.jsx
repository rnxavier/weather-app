import { useContext } from "react";
import "./TodaysWeather.css";
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
    <div className="todaysWeatherContainer">
      <p className="date">Today</p>
      <div className="mapContainer">
        {weatherData.map((item) => (
          <HourlyWeatherTile time={item.time} img={item.img} temp={item.temp} />
        ))}
      </div>
    </div>
  );
};

export default TodaysWeather;
