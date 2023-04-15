import { Link } from "react-router-dom";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import shuffle from "../playerbuttons/Shuffle.png";
import previous from "../playerbuttons/Previous.png";
import play from "../playerbuttons/Play.png";
import next from "../playerbuttons/Next.png";
import repeat from "../playerbuttons/Repeat.png";
import { useSelector } from "react-redux";

const Player = () => {
  const selectedSong = useSelector(state => state.home.selectedSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row>
            {selectedSong && (
              <Col xs={2} className="text-center d-flex py-auto align-items-center">
                <Image id="playerImg" src={selectedSong.album.cover_medium} width={80} height={80} alt="song cover" />
                <h5 className="text-light fs-6 ps-2">{selectedSong.title_short}</h5>
              </Col>
            )}

            <Col xs={6} md={4} lg={2} className="mx-auto playerControls mt-1">
              <Row>
                <Col>
                  <Link to="#">
                    <Image src={shuffle} alt="shuffle" />
                  </Link>
                </Col>
                <Col>
                  <Link to="#">
                    <Image src={previous} alt="previous" />
                  </Link>
                </Col>
                <Col>
                  <Link to="#">
                    <Image src={play} alt="play" />
                  </Link>
                </Col>
                <Col>
                  <Link to="#">
                    <Image src={next} alt="next" />
                  </Link>
                </Col>
                <Col>
                  <Link to="#">
                    <Image src={repeat} alt="repeat" />
                  </Link>
                </Col>
              </Row>

              <Col xs={12} className="mx-auto justify-content-center playBar py-3">
                <ProgressBar style={{ width: "187px" }} now={0} />
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
