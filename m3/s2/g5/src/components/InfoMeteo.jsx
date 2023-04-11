import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const InfoMeteo = () => {
  const meteo = useSelector(state => state.meteo.content);

  return (
    <Container className="pb-5">
      <Row xs={2} md={4} className="gx-3 gy-3">
        <Col>
          <Card id="infoCard">
            <Card.Header className="text-nowrap">Umidità</Card.Header>
            <Card.Body className="pb-4">
              <Card.Title className="fs-2">{meteo.main.humidity}%</Card.Title>
              <Card.Text className="fs-5">Umidità nell'aria.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id="infoCard">
            <Card.Header className="text-nowrap">Temp. Percepita</Card.Header>
            <Card.Body className="pb-4">
              <Card.Title className="fs-2">{parseFloat(meteo.main.feels_like).toFixed(0)}°</Card.Title>
              <Card.Text className="fs-5">Temperatura percepita.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id="infoCard">
            <Card.Header className="text-nowrap">Pressione</Card.Header>
            <Card.Body className="pb-4">
              <Card.Title className="fs-2">{(meteo.main.pressure / 1000).toFixed(3)} hPa</Card.Title>
              <Card.Text className="fs-5">Pressione atmosferica.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card id="infoCard">
            <Card.Header className="text-nowrap">Visibilità</Card.Header>
            <Card.Body className="pb-4">
              <Card.Title className="fs-2">{meteo.visibility / 1000} km</Card.Title>
              <Card.Text className="fs-5">Visibilità in km.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default InfoMeteo;
