import "./SearchBar.css";
import { api_key } from "../../secret";
import { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { LocationContext } from "../../contexts/LocationContext";
import { TemperatureContext } from "../../contexts/TemperatureContext";
import { DescriptionContext } from "../../contexts/DescriptionContext";
import { ImageContext } from "../../contexts/ImageContext";
import { HourlyContext } from "../../contexts/HourlyContext";
import { DateContext } from "../../contexts/DateContext";

const SearchBar = () => {
  const { setLocation } = useContext(LocationContext);
  const { setDayOneTemp, setDayTwoTemp, setDayThreeTemp } =
    useContext(TemperatureContext);
  const { setDayOneImg, setDayTwoImg, setDayThreeImg } =
    useContext(ImageContext);
  const { setDayOneDescription, setDayTwoDescription, setDayThreeDescription } =
    useContext(DescriptionContext);
  const {
    setTodaysHourlyTime,
    setTodaysHourlyTemp,
    setTodaysHourlyImage,
    setTomorrowsHourlyTime,
    setTomorrowsHourlyTemp,
    setTomorrowsHourlyImage,
    setDayAftersHourlyTime,
    setDayAftersHourlyTemp,
    setDayAftersHourlyImage,
  } = useContext(HourlyContext);

  let todaysHourlyTimeArray = [];
  let todaysHourlyTempArray = [];
  let todaysHourlyImageArray = [];

  let tomorrowsHourlyTimeArray = [];
  let tomorrowsHourlyTempArray = [];
  let tomorrowsHourlyImageArray = [];

  let dayAftersHourlyTimeArray = [];
  let dayAftersHourlyTempArray = [];
  let dayAftersHourlyImageArray = [];
  const { setDayTwoDate, setDayThreeDate } = useContext(DateContext);

  const [locationInput, setLocationInput] = useState();

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${locationInput}&days=7`;

  const fetchWeather = () => {
    fetch(url)
      .then((res) => res.json())
      .then((values) => {
        values.location.region !== ""
          ? setLocation(
              `${values.location.name}, ${values.location.region}, ${values.location.country}`
            )
          : setLocation(`${values.location.name}, ${values.location.country}`);
        setDayOneTemp(values.forecast.forecastday[0].day.avgtemp_c);
        setDayTwoTemp(values.forecast.forecastday[1].day.avgtemp_c);
        setDayThreeTemp(values.forecast.forecastday[2].day.avgtemp_c);
        setDayOneImg(values.forecast.forecastday[0].day.condition.icon);
        setDayTwoImg(values.forecast.forecastday[1].day.condition.icon);
        setDayThreeImg(values.forecast.forecastday[2].day.condition.icon);
        setDayOneDescription(values.forecast.forecastday[0].day.condition.text);
        setDayTwoDescription(values.forecast.forecastday[1].day.condition.text);
        setDayThreeDescription(
          values.forecast.forecastday[2].day.condition.text
        );

        for (let i = 0; i < 24; i++) {
          todaysHourlyTempArray.push(
            values.forecast.forecastday[0].hour[i].temp_c
          );
          todaysHourlyImageArray.push(
            values.forecast.forecastday[0].hour[i].condition.icon
          );
          todaysHourlyTimeArray.push(
            values.forecast.forecastday[0].hour[i].time.substr(
              values.forecast.forecastday[0].hour[i].time.length - 5
            )
          );
          tomorrowsHourlyTempArray.push(
            values.forecast.forecastday[1].hour[i].temp_c
          );
          tomorrowsHourlyImageArray.push(
            values.forecast.forecastday[1].hour[i].condition.icon
          );
          tomorrowsHourlyTimeArray.push(
            values.forecast.forecastday[1].hour[i].time.substr(
              values.forecast.forecastday[1].hour[i].time.length - 5
            )
          );
          dayAftersHourlyTempArray.push(
            values.forecast.forecastday[2].hour[i].temp_c
          );
          dayAftersHourlyImageArray.push(
            values.forecast.forecastday[2].hour[i].condition.icon
          );
          dayAftersHourlyTimeArray.push(
            values.forecast.forecastday[2].hour[i].time.substr(
              values.forecast.forecastday[2].hour[i].time.length - 5
            )
          );
        }
        setTodaysHourlyTime(todaysHourlyTimeArray);
        setTodaysHourlyTemp(todaysHourlyTempArray);
        setTodaysHourlyImage(todaysHourlyImageArray);

        setTomorrowsHourlyTime(tomorrowsHourlyTimeArray);
        setTomorrowsHourlyTemp(tomorrowsHourlyTempArray);
        setTomorrowsHourlyImage(tomorrowsHourlyImageArray);

        setDayAftersHourlyTime(dayAftersHourlyTimeArray);
        setDayAftersHourlyTemp(dayAftersHourlyTempArray);
        setDayAftersHourlyImage(dayAftersHourlyImageArray);

        setDayTwoDate(values.forecast.forecastday[1].date);
        setDayThreeDate(values.forecast.forecastday[2].date);
      })
      .catch((err) => console.log(err));
  };

  const handleSearchClick = () => {
    fetchWeather();
  };

  return (
    <div className="searchBarContainer">
      <input
        placeholder="Enter UK city or postcode"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Enter UK city or postcode")}
        value={locationInput}
        onChange={(e) => {
          setLocationInput(e.target.value);
        }}
      ></input>
      <button onClick={handleSearchClick}>
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
