import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import Post from "../components/Post";

const Home = () => {
  const { posts } = useContext(PostContext);
  return (
    <div>
      <h3>Blog Posts</h3>
      <ul style={{ padding: "0" }}>
        {posts.map((post, key) => (
          <Post post={post} key={key} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
