import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { PostContext } from "../context/PostContext";

const EditPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();

  const navigate = useNavigate();

  const { findPostById, updatePost } = useContext(PostContext);

  const post = findPostById(Number(id));

  console.log(post);

  useEffect(() => {
    if (post) {
      reset({ title: post.title, content: post.content });
    }
  }, [post]);

  function onSubmit(data) {
    updatePost({ ...data, id: Number(id) });
    navigate("/");
  }

  if (!post) return <p style={{ color: "red" }}>Post not found</p>;

  return (
    <div>
      <h3>Edit a Post</h3>
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
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
