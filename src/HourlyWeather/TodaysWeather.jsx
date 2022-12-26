import { useContext } from "react";
import "./TodaysWeather.css";
import CarouselComponent from "../components/WeatherTiles/CarouselComponent";
import { HourlyContext } from "../contexts/HourlyContext";
import { LocationContext } from "../contexts/LocationContext";
import HourlyWeatherTile from "./HourlyWeatherTile";

const TodaysWeather = () => {
  const { todaysHourlyTemp, todaysHourlyTime, todaysHourlyImage } =
    useContext(HourlyContext);
  const { location } = useContext(LocationContext);

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
      <p className="date">
        <strong>{location}</strong>
      </p>
      <p className="date">Today</p>
      <div className="mapContainer">
        {weatherData.map((item) => (
          <HourlyWeatherTile time={item.time} img={item.img} temp={item.temp} />
        ))}
      </div>
      <div className="carouselContainer">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default TodaysWeather;
