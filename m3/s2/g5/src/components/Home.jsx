import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&lang=it&units=metric&appid=7a8ddce8f84f177f053d45de79e6ca77`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const search = async e => {
    e.preventDefault();
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "LAT_LON", payload: data });
        navigate("/search");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center pt-4 text-light home">
      <h1 className="display-1 titolo">SkyView</h1>
      <Form onSubmit={search}>
        <Form.Group className="mb-3" controlId="search">
          <Form.Label className="fs-3">Cerca una città:</Form.Label>
          <Form.Control
            className="cerca"
            value={query}
            onChange={handleChange}
            type="search"
            placeholder="es. Roma, Milano..."
          />
        </Form.Group>
      </Form>
    </Container>
  );
};
export default Home;
