import "./WeatherTiles.css";
import placeholderImg from "../../images/weather-img.png";

const WeatherTiles = () => {
  return (
    <div className="weatherTileContainer">
      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Max temp</p>
        <p>Min temp</p>
        <p>Sunday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Max temp</p>
        <p>Min temp</p>
        <p>Monday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Max temp</p>
        <p>Min temp</p>
        <p>Tuesday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Max temp</p>
        <p>Min temp</p>
        <p>Wednesday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Max temp</p>
        <p>Min temp</p>
        <p>Thursday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Max temp</p>
        <p>Min temp</p>
        <p>Friday</p>
      </div>

      <div className="tileDiv">
        <img src={placeholderImg} alt="" />
        <p>Max temp</p>
        <p>Min temp</p>
        <p>Saturday</p>
      </div>
    </div>
  );
};

export default WeatherTiles;
