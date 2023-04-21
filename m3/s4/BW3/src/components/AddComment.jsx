import { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsAction } from "../redux/actions";

const AddComment = ({ post }) => {
  const profile = useSelector((state) => state.profile.content);

  const dispatch = useDispatch();

  const [comment, setComment] = useState({});

  useEffect(() => {
    setComment({
      comment: "",
      rate: 5,
      elementId: post._id
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  const sendComment = async (e) => {
    e.preventDefault();
    const token = process.env.REACT_APP_API_CRUD;
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      });
      if (response.ok) {
        dispatch(getCommentsAction(`https://striveschool-api.herokuapp.com/api/comments/${post._id}`));
        setComment({
          comment: "",
          rate: 5,
          elementId: post._id
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Card className="mt-3 mb-3 text-white bg-dark border-0">
      <Card.Body className="d-flex align-items-center gap-2 px-0">
        {profile && (
          <img
            className="border border-dark border-2 rounded-circle "
            src={profile.image}
            alt="avatar"
            width={48}
            height={48}
          />
        )}
        <Form className="w-100" onSubmit={sendComment}>
          <Form.Control
            className="bg-dark text-light rounded-pill"
            type="text"
            placeholder="Scrivi un commento.."
            value={comment.comment}
            onChange={(e) => setComment({ ...comment, comment: e.target.value })}
          />
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddComment;
