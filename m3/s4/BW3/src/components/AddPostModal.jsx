import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../redux/actions";

const AddPostModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.content);
  const [post, setPost] = useState({
    text: ""
  });

  const [image, setImage] = useState(null);

  const addPost = async (e) => {
    e.preventDefault();
    const token = process.env.REACT_APP_API_KEY;

    const fetchImage = async (data) => {
      try {
        if (!image) {
          alert("Please select an image to upload");
          return;
        }

        const formData = new FormData();
        formData.append("post", image);
        formData.append("username", profile.username);

        const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${data}`, {
          method: "POST",
          body: formData,
          headers: {
            Authorization: token
          }
        });

        if (response.ok) {
          setImage(null);
          dispatch(getPostsAction());
        }
      } catch (error) {
        alert(error);
      }
    };

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      });
      if (response.ok) {
        const data = await response.json();
        if (image) {
          fetchImage(data._id);
        }
        dispatch(getPostsAction());
        setPost({
          text: ""
        });
        handleClose();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="text-white">
      <Modal.Header className="bg-dark text-white" closeButton>
        <Modal.Title>Crea un post</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        {profile && (
          <div className="d-flex gap-2 align-items-center mb-2">
            <img
              className="border border-dark border-2 rounded-circle "
              src={profile.image}
              alt="avatar"
              width={48}
              height={48}
            />
            <p>
              {profile.name} {profile.surname}
            </p>
          </div>
        )}
        <Form onSubmit={addPost}>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              as="textarea"
              className="bg-dark border-0 p-0 text-white"
              placeholder="Di che cosa vuoi parlare?"
              rows={3}
              required
              value={post.text}
              onChange={(e) => setPost({ ...post, text: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              type="file"
              className="bg-dark border-0 p-0 text-white"
              placeholder="Inserisci un url di un immagine"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>
          <Button className="rounded-pill" variant="secondary" type="submit">
            Pubblica
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddPostModal;
