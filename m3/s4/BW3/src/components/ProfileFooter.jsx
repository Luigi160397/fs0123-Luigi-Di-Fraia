import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaQuestionCircle } from "react-icons/fa";

const ProfileFooter = () => {
    return (
        <footer style={{ background: "#212529" }}>
            <Container className="px-5">
                <Row>
                    <Col lg={2}>
                        <div className="d-flex flex-column">
                            <Link className="text-white" style={{ textDecoration: "none" }}>Informazioni</Link>
                            <Link className="text-white" style={{ textDecoration: "none" }}>Linee guida della community</Link>
                            <Dropdown>
                                <Dropdown.Toggle className="bg-transparent border-0 p-0" id="dropdown-basic">
                                    Privacy e condizioni
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Link className="text-white" style={{ textDecoration: "none" }}>Sales Solutions</Link>
                            <Link className="text-white" style={{ textDecoration: "none" }}>Centro sicurezza</Link>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="d-flex flex-column">
                            <Link className="text-white" style={{ textDecoration: "none" }}>Accessibilità</Link>
                            <Link className="text-white" style={{ textDecoration: "none" }}>Carriera</Link>
                            <Link className="text-white" style={{ textDecoration: "none" }}>Opzioni per gli annunci pubblicitari</Link>
                            <Link className="text-white" style={{ textDecoration: "none" }}>Mobile</Link>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="d-flex flex-column">
                            <Link className="text-white" style={{ textDecoration: "none" }}>Talent Solutions</Link>
                            <Link className="text-white" style={{ textDecoration: "none" }}>Soluzioni di marketing</Link>
                            <Link className="text-white" style={{ textDecoration: "none" }}>Pubblicità</Link>
                            <Link className="text-white" style={{ textDecoration: "none" }}>Piccole imprese</Link>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row align-items-center">
                                <FaQuestionCircle className="text-white"/>
                                <Link className="text-white" style={{ textDecoration: "none" }}>Domande?</Link>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <FaQuestionCircle className="text-white"/>
                                <Link className="text-white" style={{ textDecoration: "none" }}>
                                    Gestisci il tuo account e la tua privacy
                                </Link>
                            </div>
                            <Link className="text-white ms-3" style={{ textDecoration: "none" }}><small>Vai alle impostazioni</small></Link>
                            <div className="d-flex flex-row align-items-center">
                                <FaQuestionCircle className="text-white"/>
                                <Link className="text-white" style={{ textDecoration: "none" }}>
                                    Trasparenza sui contenuti consigliati
                                </Link>
                            </div>
                            <Link className="text-white ms-3" style={{ textDecoration: "none" }}><small>Scopri di più sui contenuti consigliati</small></Link>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="d-flex flex-column">
                            <Link className="text-white" style={{ textDecoration: "none" }}>Seleziona lingua</Link>
                            <Dropdown>
                                <Dropdown.Toggle className="bg-transparent border-0 p-0" id="dropdown-basic">
                                    Italiano (Italiano)
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-white">Linkedin Corporation &#169; 2023</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default ProfileFooter;
