import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PrefsJobs = () => {
  const favJobs = useSelector(state => state.fav.favJobs);

  return (
    <Card className="mt-0 mb-2 bg-dark text-light">
      <Card.Body className="d-flex flex-column">
        <Link
          to="/jobs"
          className="card-text text-decoration-none text-white fw-bold mb-2"
          style={{ fontSize: "12px" }}
        >
          Preferiti
        </Link>

        {favJobs.map(job => (
          <Link
            key={job._id}
            to="/jobs"
            className="card-text text-decoration-none text-white fw-bold text-truncate"
            style={{ fontSize: "12px" }}
          >
            {job.title}
          </Link>
        ))}
      </Card.Body>
    </Card>
  );
};

export default PrefsJobs;
