import "./SearchBar.css";
import { api_key } from "../../secret";
import { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { LocationContext } from "../../contexts/LocationContext";

const SearchBar = () => {
  const { location, setLocation } = useContext(LocationContext);
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
      })

      .catch((err) => console.log(err));
  };

  const handleSearchClick = () => {
    fetchWeather();
  };

  return (
    <div className="searchBarContainer">
      <input
        placeholder="Enter town, city or UK postcode"
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
