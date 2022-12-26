import { useContext } from "react";
import "./TodaysWeather.css";
import { HourlyContext } from "../contexts/HourlyContext";
import HourlyWeatherTile from "./HourlyWeatherTile";
import { DateContext } from "../contexts/DateContext";
import { LocationContext } from "../contexts/LocationContext";
import CarouselComponent from "../components/WeatherTiles/CarouselComponent";

const TomorrowsWeather = () => {
  const { tomorrowsHourlyTemp, tomorrowsHourlyTime, tomorrowsHourlyImage } =
    useContext(HourlyContext);
  const { dayTwoDate } = useContext(DateContext);
  const { location } = useContext(LocationContext);
  let dayTwo = new Date(dayTwoDate).toString().substring(0, 15);

  let weatherData = [];

  for (let i = 0; i < tomorrowsHourlyImage.length; i++) {
    weatherData.push({
      time: tomorrowsHourlyTime[i],
      img: tomorrowsHourlyImage[i],
      temp: tomorrowsHourlyTemp[i],
    });
  }

  return (
    <div className="todaysWeatherContainer">
      <p className="date">
        <strong>{location}</strong>
      </p>
      <p className="date">{dayTwo}</p>
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

export default TomorrowsWeather;
