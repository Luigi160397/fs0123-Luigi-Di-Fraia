import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentArea = ({ post }) => {
  return (
    <>
      <AddComment post={post}/>
      <CommentList post={post} />
    </>
  );
};

export default CommentArea;
