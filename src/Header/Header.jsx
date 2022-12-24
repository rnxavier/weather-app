import "./Header.css";
import weatherImg from "../images/weather-img.png";

const Header = () => {
  return (
    <div>
      <div className="logoDiv">
        <strong>&lt;RJForecasts /&gt;</strong>
      </div>
      <div className="image-div">
        <img src={weatherImg} alt="img" />
      </div>
    </div>
  );
};

export default Header;
