import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getExperiencesAction } from "../redux/actions";
import { IoMdPeople } from "react-icons/io";

const SidebarCardBotton = () => {
  const dispatch = useDispatch();
  const content = useSelector(state => state.profile.content);

  useEffect(() => {
    if (content) {
      dispatch(getExperiencesAction(content._id));
    }
  }, [content]);

  const experiencies = useSelector(state => state.profile.experiencies);
  return (
    <Card className="mt-1 mb-2 bg-dark text-light">
      <Card.Body className="d-flex flex-column">
        <Link
          to="/experiences"
          className="card-text text-decoration-none text-white fw-bold mb-2"
          style={{ fontSize: "12px" }}
        >
          Esperienze
        </Link>

        {experiencies.map(experience => (
          <Link
            key={experience._id}
            to="/experiences"
            className="card-text text-decoration-none text-white fw-bold text-truncate"
            style={{ fontSize: "12px" }}
          >
            <IoMdPeople /> {experience.role}
          </Link>
        ))}
      </Card.Body>
    </Card>
  );
};

export default SidebarCardBotton;
