import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../redux/actions";

import UploadImage from "./UploadImage";

const MainCard = () => {
  const [showImg, setShowImg] = useState(false);
  const handleCloseImg = () => setShowImg(false);
  const handleShowImg = () => setShowImg(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const profile = useSelector(state => state.profile.content);

  return (
    <>
      {profile && (
        <Card className="mt-3 bg-dark text-white position-relative border-0 mb-3">
          <UploadImage
            handleCloseImg={handleCloseImg}
            showImg={showImg}
            url={`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/picture`}
            data={"profile"}
            username={profile.username}
          />
          <Button
            style={{ right: "10px", top: "10px" }}
            variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
          >
            <FaPen className="text-white fs-5" />
          </Button>
          <Card.Img variant="top" src="https://picsum.photos/900/300" width={800} height={200} />
          <Card.Body className="position-relative mt-4">
            <img
              style={{ bottom: "280px" }}
              className="border border-dark border-5 rounded-circle position-absolute"
              src={profile.image}
              alt="avatar"
              width={150}
              height={150}
            />
            <Button
              style={{ right: "10px", top: "0px" }}
              variant="outline-secondary border-0 py-2 rounded-circle position-absolute"
              onClick={handleShowImg}
            >
              <FaPen className="text-white fs-4" />
            </Button>
            <Card.Title className="fs-4 mb-0">
              {profile.name} {profile.surname}
            </Card.Title>
            <Card.Text className="fs-5 mb-0">{profile.title}</Card.Text>
            <Card.Text className="text-light mb-0">
              {profile.area} &middot;{" "}
              <Link style={{ color: "#70b5f9" }} className="text-decoration-none" to={"/profile"}>
                Informazioni di contatto
              </Link>
            </Card.Text>
            <Card.Text className=" mb-0">
              <Link style={{ color: "#70b5f9" }} className="text-decoration-none" to={"/profile"}>
                33 collegamenti
              </Link>
            </Card.Text>
            <div className="d-flex pt-1 gap-2">
              <Button style={{ backgroundColor: "#70b5f9" }} className="rounded-pill text-dark border-0">
                Disponibile per
              </Button>
              <Button style={{ color: "#70b5f9", border: "1px solid #70b5f9" }} variant="outline-primary rounded-pill">
                Aggiungi sezione del profilo
              </Button>
              <Button variant="outline-light rounded-pill">Altro</Button>
            </div>

            <Card style={{ backgroundColor: "hsl(211.3deg 17.04% 26.47%)" }} className="mt-3">
              <Card.Body className="position-relative">
                <Button
                  style={{ right: "0px", top: "0px" }}
                  variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
                >
                  <FaPen className="text-white fs-5" />
                </Button>
                <Card.Subtitle className="mb-0">Disponibile a lavorare</Card.Subtitle>
                <Card.Text className="mb-0">Ruoli di Sviluppatore Web, React Developer</Card.Text>
                <Link style={{ color: "#70b5f9" }} className="text-decoration-none" to={"/profile"}>
                  Mostra dettagli
                </Link>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default MainCard;
