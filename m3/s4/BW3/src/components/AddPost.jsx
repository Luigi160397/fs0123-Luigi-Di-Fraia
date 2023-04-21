import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddPostModal from "./AddPostModal";
import { useState } from "react";

const AddPost = () => {
  const profile = useSelector(state => state.profile.content);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card className="mt-3 text-white bg-dark">
      <AddPostModal handleClose={handleClose} show={show} />
      <Card.Body className="d-flex gap-2">
        {profile && (
          <img
            className="border border-dark border-2 rounded-circle "
            src={profile.image}
            alt="avatar"
            width={48}
            height={48}
          />
        )}
        <Button
          className="w-100 rounded-pill"
          variant="outline-secondary"
          onClick={() => {
            handleShow();
          }}
        >
          Avvia un post
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddPost;
