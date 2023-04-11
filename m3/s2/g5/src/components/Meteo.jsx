import { Container } from "react-bootstrap";
import ButtonHome from "./ButtonHome";
import MainCard from "./MainCard";
import Forecast from "./Forecast";
import InfoMeteo from "./InfoMeteo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LineChart from "./LineChart";

const Meteo = () => {
  const coord = useSelector(state => state.coord.content);
  const lat = coord[0].lat;
  const lon = coord[0].lon;

  const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=it&units=metric&appid=7a8ddce8f84f177f053d45de79e6ca77`;

  const dispatch = useDispatch();

  const request = async endpoint => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "CURRENT_METEO", payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request(endpoint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const meteo = useSelector(state => state.meteo.content);
  return (
    <Container fluid>
      <ButtonHome />
      {meteo !== null && (
        <>
          <MainCard />
          <Forecast />
          <LineChart />
          <InfoMeteo />
        </>
      )}
    </Container>
  );
};

export default Meteo;
