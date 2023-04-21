import { Badge, Card } from "react-bootstrap";

import { FaEye } from "react-icons/fa";
import { BsBroadcast } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";

const RisorseCard = () => {
  return (
    <Card className="bg-dark text-white mb-3">
      <Card.Body>
        <Card.Title>Risorse</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <span>
            <FaEye />
          </span>
          Solo per te
        </Card.Subtitle>
        <Card.Text>
          <span>
            <BsBroadcast />
          </span>
          Modalità creazione di contenuti <Badge bg="secondary">No</Badge>
        </Card.Text>
        <div className="text-secondary">
          <hr />
        </div>
        <Card.Text>
          <span>
            <BsFillPeopleFill />
          </span>
          La mia rete
        </Card.Text>
        <Card.Text>Salva e gestisci i tuoi collegamenti e interessi.</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RisorseCard;
