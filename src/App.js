import "./App.css";
import BodyContainer from "./Body/BodyContainer";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LocationContext } from "./contexts/LocationContext";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState();
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <Header />
      <BodyContainer />
      <Footer />
    </LocationContext.Provider>
  );
}

export default App;
