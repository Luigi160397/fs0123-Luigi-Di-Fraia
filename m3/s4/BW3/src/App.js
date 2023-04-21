import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./components/MyNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Experiences from "./components/Experiences";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route
            path="/experiences"
            element={
              <Container className="px-5 py-3">
                <Row>
                  <Col md={8}>
                    <Experiences />
                  </Col>
                  <Col md={4}>
                    <Sidebar />
                  </Col>
                </Row>
              </Container>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
