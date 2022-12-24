import React from "react";
import Location from "../components/Location/Location";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherTiles from "../components/WeatherTiles/WeatherTiles";

const BodyContainer = () => {
  return (
    <>
      <SearchBar />
      <WeatherTiles />
      <Location />
    </>
  );
};

export default BodyContainer;
