import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NewsProps } from "../interfaces/INotizia";

const Notizia = ({ imageUrl, title, newsSite, id }: NewsProps) => {
  const navigate = useNavigate();
  return (
    <Card className="text-center">
      <Card.Img className="img-fluid" variant="top" src={imageUrl} id="cardImg" />
      <Card.Body>
        <Card.Title className="text-truncate">{title}</Card.Title>
        <Card.Text>{newsSite}</Card.Text>
        <Button onClick={() => navigate(`/detail/${id}`)} variant="outline-secondary">
          Discover more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Notizia;
