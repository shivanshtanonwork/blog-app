import React from "react";

const Post = ({ post }) => {
  return (
    <div
      style={{
        padding: "20px",
        margin: "10px",
        width: "300px",
        border: "2px solid white",
      }}
    >
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
