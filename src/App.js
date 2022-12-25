import "./App.css";
import BodyContainer from "./Body/BodyContainer";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LocationContext } from "./contexts/LocationContext";
import { TemperatureContext } from "./contexts/TemperatureContext";
import { ImageContext } from "./contexts/ImageContext";
import { useState } from "react";
import { DescriptionContext } from "./contexts/DescriptionContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { DateContext } from "./contexts/DateContext";

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
  const [dayOneDate, setDayOneDate] = useState();
  const [dayTwoDate, setDayTwoDate] = useState();
  const [dayThreeDate, setDayThreeDate] = useState();

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
            <DateContext.Provider
              value={{
                dayOneDate,
                setDayOneDate,
                dayTwoDate,
                setDayTwoDate,
                dayThreeDate,
                setDayThreeDate,
              }}
            >
              <BrowserRouter>
                <Routes>
                  <Route element={<Layout />}>
                    <Route path="/" element={<BodyContainer />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </DateContext.Provider>
          </DescriptionContext.Provider>
        </ImageContext.Provider>
      </TemperatureContext.Provider>
    </LocationContext.Provider>
  );
}

export default App;
