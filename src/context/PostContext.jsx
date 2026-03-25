import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

// localStorage.getItem("posts");
// localStorage.setItem("posts");

function PostProvider(props) {
  const [posts, setPosts] = useState(() => {
    const storedPost = localStorage.getItem("posts");
    if (storedPost) {
      return JSON.parse(storedPost);
    } else {
      return [
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
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  function addPost(newPost) {
    const lastId = posts[posts.length - 1].id;
    setPosts((prev) => [...prev, { ...newPost, id: lastId + 1 }]);
  }

  function findPostById(id) {
    return posts.find((post) => post.id === id);
  }

  function updatePost(updatedPost) {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post)),
    );
  }

  return (
    <PostContext.Provider value={{ posts, addPost, findPostById, updatePost }}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostProvider;
