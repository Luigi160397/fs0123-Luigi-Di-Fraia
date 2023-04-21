import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import { FaPen, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
import AddExperience from "./AddExperience";
import EditExperience from "./EditExperience";
import { Link, useLocation } from "react-router-dom";
import UploadImage from "./UploadImage";

const Experiences = () => {
  const location = useLocation();
  const [experience, setExperience] = useState(null);

  const content = useSelector((state) => state.profile.content);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [showImg, setShowImg] = useState(false);
  const handleCloseImg = () => setShowImg(false);
  const handleShowImg = () => setShowImg(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (content) {
      dispatch(getExperiencesAction(content._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  const experiencies = useSelector((state) => state.profile.experiencies);

  return (
    <Card className="bg-dark text-white mb-3 position-relative">
      {experience && (
        <>
          <EditExperience esperienza={experience} showEdit={showEdit} handleCloseEdit={handleCloseEdit} />
          <AddExperience esperienza={experience} show={show} handleClose={handleClose} />
          <UploadImage
            handleCloseImg={handleCloseImg}
            showImg={showImg}
            url={`https://striveschool-api.herokuapp.com/api/profile/${experience.user}/experiences/${experience._id}/picture`}
            data={"experience"}
            username={experience.user}
          />
        </>
      )}
      <Button
        style={{ right: "0px", top: "0px" }}
        variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
        onClick={() => {
          console.log("ciao", experience);
          setExperience(experience);
          handleShow();
        }}
      >
        <FaPlus className="text-white fs-5" />
      </Button>
      <Card.Title className="mt-3 ms-3">Esperienza</Card.Title>
      {location.pathname === "/profile"
        ? experiencies.slice(0, 3).map((experience) => (
            <Card.Body key={experience._id} className="position-relative">
              {/* <AddExperience esperienza={experience} show={show} handleClose={handleClose} />
              <EditExperience esperienza={experience} showEdit={showEdit} handleCloseEdit={handleCloseEdit} />
              <UploadImage
                handleCloseImg={handleCloseImg}
                showImg={showImg}
                url={`https://striveschool-api.herokuapp.com/api/profile/${experience.user}/experiences/${experience._id}/picture`}
                data={"experience"}
                username={experience.user}
              /> */}
              <Button
                style={{ right: "0px", top: "20px" }}
                variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
                // onClick={handleShowEdit}
                onClick={() => {
                  console.log("ciao", experience);
                  setExperience(experience);
                  handleShowEdit();
                }}
              >
                <FaPen className="text-white fs-5" />
              </Button>
              <Row>
                <Col className="d-flex gap-2">
                  <div>
                    <img
                      onClick={() => {
                        setExperience(experience);
                        handleShowImg();
                      }}
                      // onClick={handleShowImg}
                      style={{ cursor: "pointer" }}
                      src={experience.image}
                      alt="Experience"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <Card.Title>{experience.role}</Card.Title>
                    <Card.Subtitle>{experience.company}</Card.Subtitle>
                    <Card.Text className="text-muted mb-0">
                      {new Date(experience.startDate).toLocaleDateString("it-IT", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      })}{" "}
                      -{" "}
                      {new Date(experience.endDate).toLocaleDateString("it-IT", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      })}
                    </Card.Text>
                    <Card.Text className="text-muted">{experience.area}</Card.Text>
                    <Card.Text>{experience.description}</Card.Text>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          ))
        : experiencies.map((experience) => (
            <Card.Body key={experience._id} className="position-relative">
              {/* <AddExperience esperienza={experience} show={show} handleClose={handleClose} />
          <EditExperience esperienza={experience} showEdit={showEdit} handleCloseEdit={handleCloseEdit} />
          <UploadImage
            handleCloseImg={handleCloseImg}
            showImg={showImg}
            url={`https://striveschool-api.herokuapp.com/api/profile/${experience.user}/experiences/${experience._id}/picture`}
            data={"experience"}
            username={experience.user}
          /> */}

              <Button
                style={{ right: "0px", top: "20px" }}
                variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
                // onClick={handleShowEdit}
                onClick={() => {
                  console.log("ciao", experience);
                  setExperience(experience);
                  handleShowEdit();
                }}
              >
                <FaPen className="text-white fs-5" />
              </Button>
              <Row>
                <Col className="d-flex gap-2">
                  <div>
                    <img
                      onClick={() => {
                        setExperience(experience);
                        handleShowImg();
                      }}
                      // onClick={handleShowImg}
                      style={{ cursor: "pointer" }}
                      src={experience.image}
                      alt="Experience"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <Card.Title>{experience.role}</Card.Title>
                    <Card.Subtitle>{experience.company}</Card.Subtitle>
                    <Card.Text className="text-muted mb-0">
                      {new Date(experience.startDate).toLocaleDateString("it-IT", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      })}{" "}
                      -{" "}
                      {new Date(experience.endDate).toLocaleDateString("it-IT", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      })}
                    </Card.Text>
                    <Card.Text className="text-muted">{experience.area}</Card.Text>
                    <Card.Text>{experience.description}</Card.Text>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          ))}
      {location.pathname === "/profile" && (
        <Card.Footer className="d-flex justify-content-center">
          <Link to="/experiences" className="card-text text-decoration-none text-white">
            Visualizza altre
          </Link>
        </Card.Footer>
      )}
    </Card>
  );
};
export default Experiences;
