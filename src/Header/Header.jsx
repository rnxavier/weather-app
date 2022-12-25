import "./Header.css";
import weatherImg from "../images/weather-img.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="logoDiv"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <strong>&lt;RJForecasts /&gt;</strong>
      </div>
      <div className="image-div">
        <img src={weatherImg} alt="img" />
      </div>
    </div>
  );
};

export default Header;
