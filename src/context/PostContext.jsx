import { createContext, useState } from "react";

export const PostContext = createContext();

function PostProvider(props) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello",
      content: "Welcome to my new Blog",
    },
    {
      id: 2,
      title: "Hello World",
      content: "Welcome to my 2nd Blog",
    },
  ]);
  function addPost(newPost) {
    const lastId = posts[posts.length - 1].id;
    setPosts((prev) => [...prev, { ...newPost, id: lastId + 1 }]);
  }
  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostProvider;
