import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../redux/actions";
import { Link } from "react-router-dom";

import { FaBookmark } from "react-icons/fa";

const SidebarCard = () => {
  const profile = useSelector((state) => state.profile.content);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {profile && (
        <Card className="mt-3 bg-dark text-white position-relative border-0 mb-2 text-center">
          <Card.Img variant="top" src="https://picsum.photos/900/300" width={800} height={50} />
          <Card.Body className="position-relative mt-4">
            <img
              style={{ top: "-48px", left: "50%", transform: "translateX(-50%)" }}
              className="border border-dark border-2 rounded-circle position-absolute"
              src={profile.image}
              alt="avatar"
              width={48}
              height={48}
            />
            <Link className="fs-6 mb-0 card-title text-decoration-none text-white" to="/profile">
              {profile.name} {profile.surname}
            </Link>
            <Card.Text className="fs-6 mb-0 text-muted border-secondary border-bottom pb-2">
              <small>{profile.title}</small>
            </Card.Text>
            <Card.Text className=" mb-0">
              <div className="d-flex justify-content-between fw-bold pt-2">
                <div>
                  <Card.Text className="text-muted mb-0 text-start" style={{ fontSize: "12px" }}>
                    Collegamenti
                  </Card.Text>
                  <p className="mb-1" style={{ fontSize: "12px" }}>
                    Espandi la tua rete
                  </p>
                </div>
                <Link style={{ color: "#70b5f9", fontSize: "12px" }} className="text-decoration-none" to={"/profile"}>
                  33
                </Link>
              </div>
              <div className="d-flex justify-content-between fw-bold border-secondary border-bottom pb-2">
                <div>
                  <Card.Text className="text-muted mb-0 text-start" style={{ fontSize: "12px" }}>
                    Chi ha visitato il tuo profilo?
                  </Card.Text>
                </div>
                <Link style={{ color: "#70b5f9", fontSize: "12px" }} className="text-decoration-none" to={"/profile"}>
                  15
                </Link>
              </div>
            </Card.Text>
            <div className="d-flex align-items-center gap-2 mt-2">
              <FaBookmark style={{ fontSize: "12px" }} />
              <Card.Text style={{ fontSize: "12px" }}>I miei elementi</Card.Text>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default SidebarCard;
