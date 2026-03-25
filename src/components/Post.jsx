import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "20px",
        margin: "10px",
        width: "300px",
        border: "2px solid white",
      }}
      onClick={() => navigate(`/edit-post/${post.id}`)}
    >
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
