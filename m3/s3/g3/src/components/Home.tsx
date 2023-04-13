import { Col, Container, Row } from "react-bootstrap";
import Notizia from "./Notizia";
import { useState, useEffect } from "react";
import { News } from "../interfaces/INotizia";

const Home = () => {
  const [notizie, setNotizie] = useState<News[]>([]);

  const endpoint = "https://api.spaceflightnewsapi.net/v3/articles";

  const fetchNews = async () => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setNotizie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container className="pt-5 pb-5">
      <Row xs={2} md={4} lg={3} className="gy-3 gx-3">
        {notizie.map(notizia => (
          <Col key={notizia.id}>
            <Notizia imageUrl={notizia.imageUrl} title={notizia.title} newsSite={notizia.newsSite} id={notizia.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
