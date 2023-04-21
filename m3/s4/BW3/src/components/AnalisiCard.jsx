import { Card, Col, Row } from "react-bootstrap";

import { FaEye } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const AnalisiCard = () => {
    return (
        <Card className="bg-dark text-white mb-3">
            <Card.Body>
                <Card.Title>Analisi</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    <span><FaEye /></span>
                    Solo per te
                </Card.Subtitle>
                <Row>
                    <Col lg={6}>
                        <Card.Text>
                            <span><BsFillPeopleFill /></span>
                            15 persone visualizzazioni del profilo
                        </Card.Text>
                        <Card.Text>
                            Scopri chi ha visitato il tuo profilo.
                        </Card.Text>
                    </Col>
                    <Col lg={6}>
                        <Card.Text>
                            <span><FaSearch /></span>
                            13 comparse nei motori di ricerca
                        </Card.Text>
                        <Card.Text>
                            Vedi quante volte compari nei risultati di ricerca.
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default AnalisiCard;