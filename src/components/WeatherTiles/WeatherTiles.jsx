import "./WeatherTiles.css";
import placeholderImg from "../../images/weather-img.png";

const WeatherTiles = () => {
  return (
    <div className="weatherTileContainer">
      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Sunday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Monday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Tuesday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Wednesday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Thursday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Friday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Saturday</p>
      </div>
    </div>
  );
};

export default WeatherTiles;
