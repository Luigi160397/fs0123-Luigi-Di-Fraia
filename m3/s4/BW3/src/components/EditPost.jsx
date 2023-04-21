import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../redux/actions";

const EditPost = ({ showEdit, handleCloseEdit, selectedPost }) => {
  const idPost = selectedPost._id;
  const profile = useSelector(state => state.profile.content);
  const dispatch = useDispatch();
  const [post, setPost] = useState({});

  useEffect(() => {
    setPost({
      _id: selectedPost._id,
      text: selectedPost.text
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPost]);

  const [image, setImage] = useState(null);

  const editPost = async e => {
    e.preventDefault();
    const token = process.env.REACT_APP_API_KEY;

    const fetchImage = async data => {
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
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${idPost}`, {
        method: "PUT",
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
        handleCloseEdit();
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async () => {
    const token = process.env.REACT_APP_API_KEY;
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${idPost}`, {
        method: "DELETE",
        headers: {
          Authorization: token
        }
      });
      if (response.ok) {
        dispatch(getPostsAction());
        handleCloseEdit();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Modal show={showEdit} onHide={handleCloseEdit} className="text-white">
      <Modal.Header className="bg-dark text-white" closeButton>
        <Modal.Title>Modifica un post</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        {post && post.text && (
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
        <Form onSubmit={editPost}>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              as="textarea"
              className="bg-dark border-0 p-0 text-white"
              placeholder="Di che cosa vuoi parlare?"
              rows={3}
              required
              value={post.text}
              onChange={e => setPost({ ...post, text: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              type="file"
              className="bg-dark border-0 p-0 text-white"
              placeholder="Inserisci un url di un immagine"
              onChange={e => setImage(e.target.files[0])}
            />
          </Form.Group>
          <Button className="rounded-pill" variant="secondary" type="submit">
            Pubblica
          </Button>
          <Button className="rounded-pill" variant="danger" type="button" onClick={handleDelete}>
            Elimina
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditPost;
