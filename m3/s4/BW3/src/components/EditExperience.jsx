import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getExperiencesAction } from "../redux/actions";

const EditExperience = ({ showEdit, handleCloseEdit, esperienza }) => {
  const idUser = esperienza.user;
  const dispatch = useDispatch();
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    setExperience({
      _id: esperienza._id,
      role: esperienza.role,
      company: esperienza.company,
      startDate: new Date(esperienza.startDate).toISOString().slice(0, 10),
      endDate: new Date(esperienza.endDate).toISOString().slice(0, 10),
      description: esperienza.description,
      area: esperienza.area
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [esperienza]);

  const editExp = async e => {
    e.preventDefault();

    const token = process.env.REACT_APP_API_KEY;
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${idUser}/experiences/${esperienza._id}`,
        {
          method: "PUT",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
        }
      );
      if (response.ok) {
        dispatch(getExperiencesAction(idUser));
        handleCloseEdit();
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async () => {
    const token = process.env.REACT_APP_API_KEY;
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${idUser}/experiences/${esperienza._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token
          }
        }
      );
      if (response.ok) {
        dispatch(getExperiencesAction(idUser));
        handleCloseEdit();
      }
    } catch (error) {
      alert(error);
    }
  };
  // console.log(esperienza);
  return (
    <Modal show={showEdit} onHide={handleCloseEdit} className="text-white">
      <Modal.Header className="bg-dark text-white" closeButton>
        <Modal.Title>Aggiungi esperienza</Modal.Title>
      </Modal.Header>
      {experience && (
        <Modal.Body className="bg-dark">
          <Form onSubmit={editExp}>
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Qualifica</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: Sales Manager"
                autoFocus
                required
                value={experience.role}
                onChange={e => setExperience({ ...experience, role: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Nome Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: Salini srl"
                autoFocus
                required
                value={experience.company}
                onChange={e => setExperience({ ...experience, company: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="area">
              <Form.Label>Località</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: Roma"
                autoFocus
                required
                value={experience.area}
                onChange={e => setExperience({ ...experience, area: e.target.value })}
              />
            </Form.Group>
            <div className="d-flex gap-3">
              <Form.Group className="mb-3" style={{ flexBasis: "50%" }} controlId="startDate">
                <Form.Label>Data inizio</Form.Label>
                <Form.Control
                  type="date"
                  autoFocus
                  required
                  value={experience.startDate}
                  onChange={e => setExperience({ ...experience, startDate: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ flexBasis: "50%" }} controlId="endDate">
                <Form.Label>Data fine</Form.Label>
                <Form.Control
                  type="date"
                  autoFocus
                  required
                  value={experience.endDate}
                  onChange={e => setExperience({ ...experience, endDate: e.target.value })}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Descrivi la tua esperienza lavorativa"
                rows={3}
                required
                value={experience.description}
                onChange={e => setExperience({ ...experience, description: e.target.value })}
              />
            </Form.Group>
            <Button className="me-3" variant="primary" type="submit">
              Salva
            </Button>
            <Button variant="danger" type="button" onClick={handleDelete}>
              Elimina
            </Button>
          </Form>
        </Modal.Body>
      )}
    </Modal>
  );
};
export default EditExperience;
