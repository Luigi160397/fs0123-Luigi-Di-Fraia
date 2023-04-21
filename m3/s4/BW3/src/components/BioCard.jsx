import { Button, Card } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { useSelector } from "react-redux";

const BioCard = () => {
  const profile = useSelector(state => state.profile.content);
  return (
    <>
      {profile && (
        <Card className="mt-3 mb-3 bg-dark text-light">
          <Card.Body className="position-relative">
            <Button
              style={{ right: "0px", top: "0px" }}
              variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
            >
              <FaPen className="text-white fs-5" />
            </Button>
            <Card.Title className="mb-2 fs-4">Informazioni</Card.Title>
            <Card.Text className="mb-0">{profile.bio}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default BioCard;
