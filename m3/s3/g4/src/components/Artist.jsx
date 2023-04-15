import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Player from "./Player";
import MainArtist from "./MainArtist";

const Artist = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <MainArtist />
        </Col>
      </Row>
      <Player />
    </Container>
  );
};

export default Artist;
