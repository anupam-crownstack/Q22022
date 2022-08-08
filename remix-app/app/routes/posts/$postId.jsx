import { useParams } from "@remix-run/react";

const PostId = () => {
  const params = useParams();

  console.log(params.postId);
  return <div>This is a Post Id:</div>;
};

export default PostId;
