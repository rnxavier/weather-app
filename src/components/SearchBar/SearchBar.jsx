import "./SearchBar.css";
import { api_key } from "../../secret";
import { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { LocationContext } from "../../contexts/LocationContext";
import { TemperatureContext } from "../../contexts/TemperatureContext";
import { ImageContext } from "../../contexts/ImageContext";

const SearchBar = () => {
  const { setLocation } = useContext(LocationContext);
  const { setDayOneTemp, setDayTwoTemp, setDayThreeTemp } =
    useContext(TemperatureContext);
  const { dayOneImg, setDayOneImg, setDayTwoImg, setDayThreeImg } =
    useContext(ImageContext);

  const [locationInput, setLocationInput] = useState();

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${locationInput}&days=7`;

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
      })
      .catch((err) => console.log(err));
  };

  console.log(dayOneImg);

  const handleSearchClick = () => {
    fetchWeather();
  };

  return (
    <div className="searchBarContainer">
      <input
        placeholder="Enter UK city or postcode"
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
