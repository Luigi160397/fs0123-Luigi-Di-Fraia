import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";

const MainCard = () => {
  const meteo = useSelector(state => state.meteo.content);

  const weatherIcon = code => {
    switch (code) {
      case "01d":
        return <WiDaySunny size={300} color="#161616" />;
      case "01n":
        return <WiDaySunny size={300} color="#161616" />;
      case "02d":
      case "02n":
      case "03d":
      case "03n":
        return <WiCloud size={300} color="#161616" />;
      case "04d":
      case "04n":
        return <WiCloud size={300} color="#161616" />;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <WiRain size={300} color="#161616" />;
      case "11d":
      case "11n":
        return <WiThunderstorm size={300} color="#161616" />;
      case "13d":
      case "13n":
        return <WiSnow size={300} color="#161616" />;
      default:
        return <WiDaySunny size={300} color="#161616" />;
    }
  };

  return (
    <Container className="mainCard">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center">{weatherIcon(meteo.weather[0].icon)}</div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body text-center text-md-start">
              <h5 className="card-title display-1 titoloMain">
                {meteo.name} {parseFloat(meteo.main.temp).toFixed(0)}°
              </h5>
              <p className="card-text fs-3 text-capitalize">{meteo.weather[0].description}</p>
              <p className="card-text fs-4">
                TEMP MIN: {parseFloat(meteo.main.temp_min).toFixed(0)}° TEMP MAX:{" "}
                {parseFloat(meteo.main.temp_max).toFixed(0)}°
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default MainCard;
