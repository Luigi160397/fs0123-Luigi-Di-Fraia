import { Button, Card } from "react-bootstrap";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { addToFavouriteAction, removeFromFavouriteAction } from "../redux/actions";
import avatar from "../assets/avatar.png";

import moment from "moment";
import "moment/locale/it";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ job }) => {
  const dispatch = useDispatch();

  const favourites = useSelector(state => state.fav.favJobs);

  return (
    <Card.Body className="pb-0">
      <div className="border-bottom border-secondary d-flex justify-content-between align-items-start pb-2">
        <div className="d-flex">
          <img style={{ cursor: "pointer" }} src={avatar} alt="Jobs" width={48} height={48} className="me-3" />
          <div>
            <Card.Title style={{ fontSize: "16px", color: "#81B4F5" }}>{job.title}</Card.Title>
            <Card.Subtitle style={{ fontSize: "14px", color: "#eeeeeee6" }}>{job.company_name}</Card.Subtitle>
            <Card.Text style={{ fontSize: "14px" }} className="text-muted mb-0">
              {job.candidate_required_location}
            </Card.Text>
            {/* <Card.Text className="text-muted mb-2">{job.description}</Card.Text> */}
            <Card.Text style={{ fontSize: "12px" }} className="text-muted mb-0">
              Pubblicato il: {moment(job.publication_date).locale("IT").format("LL", "it")}
            </Card.Text>
          </div>
        </div>
        <Button style={{ right: "0px", top: "20px" }} variant="transparent border-0 py-1 px-2 rounded-circle">
          {favourites.includes(job) ? (
            <FaBookmark className="text-white fs-5" onClick={() => dispatch(removeFromFavouriteAction(job))} />
          ) : (
            <FaRegBookmark className="text-white fs-5" onClick={() => dispatch(addToFavouriteAction(job))} />
          )}
        </Button>
      </div>
    </Card.Body>
  );
};

export default Job;
