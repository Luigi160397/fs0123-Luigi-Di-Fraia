import { useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";

const Forecast = () => {
  const coord = useSelector(state => state.coord.content);
  const lat = coord[0].lat;
  const lon = coord[0].lon;

  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=it&units=metric&appid=7a8ddce8f84f177f053d45de79e6ca77`;

  const dispatch = useDispatch();

  const request = async endpoint => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "METEO_SETTIMANA", payload: data.list });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request(endpoint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const settimana = useSelector(state => state.settimana.content);

  const weatherIcon = code => {
    switch (code) {
      case "01d":
        return <WiDaySunny size={70} color="#161616" />;
      case "01n":
        return <WiDaySunny size={70} color="#161616" />;
      case "02d":
      case "02n":
      case "03d":
      case "03n":
        return <WiCloud size={70} color="#161616" />;
      case "04d":
      case "04n":
        return <WiCloud size={70} color="#161616" />;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        return <WiRain size={70} color="#161616" />;
      case "11d":
      case "11n":
        return <WiThunderstorm size={70} color="#161616" />;
      case "13d":
      case "13n":
        return <WiSnow size={70} color="#161616" />;
      default:
        return <WiDaySunny size={70} color="#161616" />;
    }
  };

  return (
    <Container className="mb-3">
      {settimana !== null && (
        <>
          <ListGroup id="forecast">
            {settimana.map((giorno, index) => (
              <ListGroup.Item key={index} className="px-3 px-md-5 d-flex justify-content-between align-items-center">
                <span className="fs-4 text-truncate">
                  {new Date(giorno.dt * 1000).toLocaleDateString("it-IT", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "Europe/Rome"
                  })}
                </span>
                <span>{weatherIcon(giorno.weather[0].icon)}</span>
                <span className="fs-4 text-nowrap">
                  {parseFloat(giorno.main.temp_min).toFixed(0)}° – {parseFloat(giorno.main.temp_max).toFixed(0)}°
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </Container>
  );
};

export default Forecast;
