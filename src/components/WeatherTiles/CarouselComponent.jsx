import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HourlyContext } from "../../contexts/HourlyContext";
import CarouselWeatherTile from "../../HourlyWeather/CarouselWeatherTile";

const CarouselComponent = () => {
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <Carousel responsive={responsive}>
        {weatherData.map((item) => (
          <CarouselWeatherTile
            time={item.time}
            img={item.img}
            temp={item.temp}
          />
        ))}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
