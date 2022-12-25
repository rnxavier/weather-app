import { useContext } from "react";
import { HourlyContext } from "../contexts/HourlyContext";

const TodaysWeather = () => {
  const { todaysHourlyTemp, todaysHourlyTime, todaysHourlyImage } =
    useContext(HourlyContext);
  return (
    <div style={{ display: "grid", gridTemplateRows: "auto auto auto" }}>
      <p>Hourly Temp</p>
    </div>
  );
};

export default TodaysWeather;
