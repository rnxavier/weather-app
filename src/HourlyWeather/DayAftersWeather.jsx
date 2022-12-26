import { useContext } from "react";
import "./TodaysWeather.css";
import { HourlyContext } from "../contexts/HourlyContext";
import HourlyWeatherTile from "./HourlyWeatherTile";
import { DateContext } from "../contexts/DateContext";
import { LocationContext } from "../contexts/LocationContext";

const DayAftersWeather = () => {
  const { dayAftersHourlyTemp, dayAftersHourlyTime, dayAftersHourlyImage } =
    useContext(HourlyContext);
  const { dayThreeDate } = useContext(DateContext);
  const { location } = useContext(LocationContext);
  let dayThree = new Date(dayThreeDate).toString().substring(0, 15);

  let weatherData = [];

  for (let i = 0; i < dayAftersHourlyImage.length; i++) {
    weatherData.push({
      time: dayAftersHourlyTime[i],
      img: dayAftersHourlyImage[i],
      temp: dayAftersHourlyTemp[i],
    });
  }

  return (
    <div className="todaysWeatherContainer">
      <p className="date">
        <strong>{location}</strong>
      </p>
      <p className="date">{dayThree}</p>
      <div className="mapContainer">
        {weatherData.map((item) => (
          <HourlyWeatherTile time={item.time} img={item.img} temp={item.temp} />
        ))}
      </div>
    </div>
  );
};

export default DayAftersWeather;
