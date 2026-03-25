import { createContext, useState } from "react";

export const PostContext = createContext();

function PostProvider(props) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello",
      content: "Welcome to my new Blog",
    },
  ]);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostProvider;
