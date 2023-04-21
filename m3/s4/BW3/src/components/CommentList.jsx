import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsAction } from "../redux/actions";

const CommentList = ({ post }) => {
  const dispatch = useDispatch();
  const url = `https://striveschool-api.herokuapp.com/api/comments/${post._id}`;
  useEffect(() => {
    dispatch(getCommentsAction(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const comments = useSelector(state => state.comment.comments);

  return (
    <>
      {comments.length > 0 ? (
        <>
          {comments.map(comment => (
            <div className="d-flex gap-3">
              <img
                className="border border-dark border-2 rounded-circle mt-3"
                src="https://picsum.photos/500/500"
                alt="avatar"
                width={48}
                height={48}
              />
              <Card className="mt-3 mb-3 text-light w-100" style={{ backgroundColor: "#3c4345" }}>
                <Card.Body>
                  <Card.Title className="mb-2 fw-bold" style={{ fontSize: "14px" }}>
                    {comment.author}
                  </Card.Title>
                  <Card.Text className="mb-0" style={{ fontSize: "12px" }}>
                    {comment.comment}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </>
      ) : (
        <Card className="mt-3 mb-3 text-light w-100" style={{ backgroundColor: "#3c4345" }}>
          <Card.Body>
            <Card.Title className="mb-2 fs-5 text-center">Non ci sono commenti per questo post.</Card.Title>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default CommentList;
