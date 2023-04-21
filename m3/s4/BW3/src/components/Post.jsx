import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../redux/actions";
import avatar1 from "../assets/avatar1.png";
import { FaPen } from "react-icons/fa";
import EditPost from "./EditPost";
import moment from "moment";
import "moment/locale/it";
import CommentArea from "./CommentArea";

const Post = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showComment, setShowComment] = useState(false);
  const [postNumber, setPostNumber] = useState(20);

  const profile = useSelector(state => state.profile.content);

  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  useEffect(() => {
    dispatch(getPostsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const posts = useSelector(state => state.home.posts);

  return (
    <div id="posts" style={{ height: "1000px", overflow: "auto" }}>
      {selectedPost && (
        <>
          <EditPost selectedPost={selectedPost} showEdit={showEdit} handleCloseEdit={handleCloseEdit} />
        </>
      )}

      {posts.slice(0, postNumber).map(post => (
        <Card className="bg-dark text-white mt-3 position-relative" key={post._id}>
          {posts.length > 0 && post && post.user && (
            <CardHeader className="d-flex gap-2">
              {profile && post.user._id && post.user._id === profile._id && (
                <Button
                  style={{ right: "10px", top: "10px" }}
                  variant="outline-secondary border-0 py-1 px-2 rounded-circle position-absolute"
                  onClick={() => {
                    console.log("Post:" + post);
                    setSelectedPost(post);
                    handleShowEdit();
                  }}
                >
                  <FaPen className="text-white fs-5" />
                </Button>
              )}
              <div>
                <img
                  className="border border-dark border-2 rounded-circle"
                  src={post.user.image ? post.user.image : avatar1}
                  alt="avatar"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <Card.Text className="mb-0" style={{ fontSize: "14px" }}>
                  {post.user.name} {post.user.surname}
                </Card.Text>
                <Card.Text className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  {post.user.title}
                </Card.Text>
                <Card.Text className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  {moment(post.createdAt).locale("IT").format("LL", "it")}
                </Card.Text>
              </div>
            </CardHeader>
          )}
          <Card.Body>
            <Card.Text>{post.text}</Card.Text>
            {posts.length > 0 && post && post.image && (
              <img src={post.image} width={"100%"} height={"300px"} alt="postImage" />
            )}
            <div className="d-flex justify-content-end">
              <Button
                style={{ fontSize: "12px" }}
                onClick={() => {
                  setShowComment(showComment === post._id ? null : post._id);
                }}
                variant="outline-secondary border-0"
                className="mt-2"
              >
                commenti
              </Button>
            </div>
            {showComment === post._id && <CommentArea post={post} />}
          </Card.Body>
        </Card>
      ))}
      <div className="d-flex justify-content-center mt-3">
        <Button className="w-100 text-white" variant="outline-secondary" onClick={() => setPostNumber(postNumber + 10)}>
          Visualizza altri post
        </Button>
      </div>
    </div>
  );
};

export default Post;
