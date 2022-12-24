import "./Location.css";
import { LocationContext } from "../../contexts/LocationContext";
import { useContext } from "react";

const Location = () => {
  const { location } = useContext(LocationContext);

  return (
    <div className="locationContainer">
      <p>{location}</p>
    </div>
  );
};

export default Location;
