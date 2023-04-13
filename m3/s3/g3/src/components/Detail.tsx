import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { News } from "../interfaces/INotizia";
import { useState, useEffect } from "react";

const Detail = () => {
  const params = useParams();
  const [notizia, setNotizia] = useState<News | null>(null);
  const endpoint = `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`;

  const fetchNews = async () => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setNotizia(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="pt-5 pb-5 d-flex flex-column justify-content-center align-items-center text-center">
      {notizia && (
        <>
          <div id="contImg">
            <img src={notizia.imageUrl} className="img-fluid" alt={notizia.title} id="articleImg" />
          </div>
          <h2 className="display-1">{notizia.title}</h2>
          <p className="display-6">From: {notizia.newsSite}</p>
          <p className="fs-5">{notizia.summary}</p>
        </>
      )}
    </Container>
  );
};

export default Detail;
