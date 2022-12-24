import "./App.css";
import BodyContainer from "./Body/BodyContainer";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LocationContext } from "./contexts/LocationContext";
import { useState } from "react";
import { TemperatureContext } from "./contexts/TemperatureContext";

function App() {
  const [location, setLocation] = useState();
  const [dayOneTemp, setDayOneTemp] = useState();
  const [dayTwoTemp, setDayTwoTemp] = useState();
  const [dayThreeTemp, setDayThreeTemp] = useState();

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
        <Header />
        <BodyContainer />
        <Footer />
      </TemperatureContext.Provider>
    </LocationContext.Provider>
  );
}

export default App;
