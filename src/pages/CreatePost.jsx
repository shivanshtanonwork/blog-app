import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    addPost(data);
    navigate("/");
  }
  return (
    <div>
      <h3>Create a New Post</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label style={{ marginRight: "10px" }}>Title</label>
          <input
            type="text"
            placeholder="Post title..."
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be atleast 3 characters",
              },
            })}
          />
          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
        </div>
        <div style={{ marginTop: "10px" }}>
          <label style={{ marginRight: "10px" }}>Content</label>
          <input
            type="text"
            placeholder="Post content..."
            {...register("content", {
              required: "Content is required",
              minLength: {
                value: 10,
                message: "Title must be atleast 10 characters",
              },
            })}
          />
          {errors.content && (
            <p style={{ color: "red" }}>{errors.content.message}</p>
          )}
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
