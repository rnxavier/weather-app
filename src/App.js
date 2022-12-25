import "./App.css";
import BodyContainer from "./Body/BodyContainer";
import TodaysWeather from "./HourlyWeather/TodaysWeather";
import { LocationContext } from "./contexts/LocationContext";
import { TemperatureContext } from "./contexts/TemperatureContext";
import { ImageContext } from "./contexts/ImageContext";
import { HourlyContext } from "./contexts/HourlyContext";
import { useState } from "react";
import { DescriptionContext } from "./contexts/DescriptionContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  const [location, setLocation] = useState();
  const [dayOneTemp, setDayOneTemp] = useState();
  const [dayTwoTemp, setDayTwoTemp] = useState();
  const [dayThreeTemp, setDayThreeTemp] = useState();
  const [dayOneImg, setDayOneImg] = useState();
  const [dayTwoImg, setDayTwoImg] = useState();
  const [dayThreeImg, setDayThreeImg] = useState();
  const [dayOneDescription, setDayOneDescription] = useState();
  const [dayTwoDescription, setDayTwoDescription] = useState();
  const [dayThreeDescription, setDayThreeDescription] = useState();
  const [todaysHourlyTime, setTodaysHourlyTime] = useState();
  const [todaysHourlyTemp, setTodaysHourlyTemp] = useState();
  const [todaysHourlyImage, setTodaysHourlyImage] = useState();

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <TemperatureContext.Provider
        value={{
          dayOneTemp,
          setDayOneTemp,
          dayTwoTemp,
          setDayTwoTemp,
          dayThreeTemp,
          setDayThreeTemp,
        }}
      >
        <ImageContext.Provider
          value={{
            dayOneImg,
            setDayOneImg,
            dayTwoImg,
            setDayTwoImg,
            dayThreeImg,
            setDayThreeImg,
          }}
        >
          <DescriptionContext.Provider
            value={{
              dayOneDescription,
              setDayOneDescription,
              dayTwoDescription,
              setDayTwoDescription,
              dayThreeDescription,
              setDayThreeDescription,
            }}
          >
            <HourlyContext.Provider
              value={{
                todaysHourlyTime,
                setTodaysHourlyTime,
                todaysHourlyTemp,
                setTodaysHourlyTemp,
                todaysHourlyImage,
                setTodaysHourlyImage,
              }}
            >
              <BrowserRouter>
                <Routes>
                  <Route element={<Layout />}>
                    <Route path="/" element={<BodyContainer />} />
                    <Route path="/todaysWeather" element={<TodaysWeather />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </HourlyContext.Provider>
          </DescriptionContext.Provider>
        </ImageContext.Provider>
      </TemperatureContext.Provider>
    </LocationContext.Provider>
  );
}

export default App;
