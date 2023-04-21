import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { getProfileAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const UploadImage = ({ showImg, handleCloseImg, data, url, username }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const uploadImg = async e => {
    e.preventDefault();
    const token = process.env.REACT_APP_API_KEY;

    try {
      if (!image) {
        alert("Please select an image to upload");
        return;
      }

      const formData = new FormData();
      formData.append(data, image);
      formData.append("username", username);

      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: token
        }
      });

      if (response.ok) {
        dispatch(getProfileAction());
        handleCloseImg();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Modal show={showImg} onHide={handleCloseImg} className="text-white">
      <Modal.Header className="bg-dark text-white" closeButton>
        <Modal.Title>Aggiungi immagine</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <Form onSubmit={uploadImg}>
          <Form.Group className="mb-3" controlId="upload">
            <Form.Label>Carica immagine</Form.Label>
            <Form.Control type="file" autoFocus required onChange={e => setImage(e.target.files[0])} />
            <Button className="mt-3" variant="primary" type="submit">
              Carica
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default UploadImage;
