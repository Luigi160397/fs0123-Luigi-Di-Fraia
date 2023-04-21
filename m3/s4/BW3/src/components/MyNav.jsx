import { Container, Dropdown, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import rete from "../assets/rete.svg";
import work from "../assets/work.svg";
import msg from "../assets/msg.svg";
import aziende from "../assets/aziende.svg";
import notifiche from "../assets/notifiche.svg";
import avatar from "../assets/avatar.png";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchQueryAction } from "../redux/actions";

const MyNav = () => {
  const [query, setQuery] = useState("");
 
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigator=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query !== ""){
      dispatch(getSearchQueryAction(query));
      navigator('/jobs');
      setQuery("");
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="px-5">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" width={50} height={50} />
          </Link>
          <Form className="d-flex position-relative me-5" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="me-2 ps-5 pe-5 "
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <FaSearch style={{ left: "10px", top: "8px" }} className="position-absolute fs-5" />
          </Form>
        </div>

        <Nav className="d-flex flex-row gap-3">
          <Link to="/" className="nav-link d-flex flex-column justify-content-center align-items-center">
            <span>
              <img width={30} height={30} src={home} alt="home" />
            </span>
            <span>Home</span>
          </Link>
          <Link className="nav-link d-flex flex-column justify-content-center align-items-center" to="/">
            <span>
              <img width={30} height={30} src={rete} alt="rete" />
            </span>
            <span>Rete</span>
          </Link>
          <Link className="nav-link d-flex flex-column justify-content-center align-items-center" to="/jobs">
            <span>
              <img width={30} height={30} src={work} alt="work" />
            </span>
            <span>Lavoro</span>
          </Link>
          <Link className="nav-link d-flex flex-column justify-content-center align-items-center" to="/">
            <span>
              <img width={30} height={30} src={msg} alt="msg" />
            </span>
            <span>Messaggistica</span>
          </Link>
          <Link className="nav-link d-flex flex-column justify-content-center align-items-center" to="/">
            <span>
              <img width={30} height={30} src={notifiche} alt="notifiche" />
            </span>
            <span>Notifiche</span>
          </Link>
          <Dropdown>
            <div className="d-flex flex-column justify-content-center align-items-center p-2">
              <img className="rounded-circle" src={avatar} alt="avatar" width={30} height={30} />
              <Dropdown.Toggle className="bg-transparent border-0 p-0" style={{ fontSize: "12px" }} id="dropdown-basic">
                Tu
              </Dropdown.Toggle>
            </div>

            <Dropdown.Menu>
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="vr text-white d-none d-md-block"></div>

          <div className="d-flex flex-column justify-content-center align-items-center p-2">
            <img width={30} height={30} src={aziende} alt="aziende" />
            <Dropdown.Toggle
              onClick={handleShow}
              style={{ fontSize: "12px" }}
              className="me-2 bg-transparent border-0 text-light p-0"
            >
              Per le aziende
            </Dropdown.Toggle>
          </div>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images,
              lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
