/*import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogForm = () => {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const [post, setPost] = useState({ title: "", body: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditMode) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost({ title: data.title, body: data.body }))
        .catch((err) => console.error(err));
    }
  }, [id, isEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      alert(`Simulated update for blog ID ${id}`);
    } else {
      alert("Simulated blog post added!");
    }
    navigate("/blogs");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>{isEditMode ? "Edit Blog" : "Add New Blog"}</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginTop: "10px" }}>Title:</label>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
          style={{ width: "100%", padding: "8px" }}
        />

        <label style={{ display: "block", marginTop: "10px" }}>Content:</label>
        <textarea
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          rows="5"
          required
          style={{ width: "100%", padding: "8px" }}
        />

        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "8px 12px",
            backgroundColor: isEditMode ? "#17a2b8" : "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          {isEditMode ? "Update Blog" : "Submit Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
*/

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogForm = ({ onSubmit, blogs = [] }) => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", body: "" });

  useEffect(() => {
    if (isEdit) {
      const existingPost = blogs.find((b) => b.id === parseInt(id));
      if (existingPost) {
        setPost(existingPost);
      }
    }
  }, [id, isEdit, blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      onSubmit({ ...post, id: parseInt(id) });
      alert("Blog updated!");
    } else {
      onSubmit(post);
      alert("Blog added!");
    }
    navigate("/blogs");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>{isEdit ? "Edit Blog" : "Add New Blog"}</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginTop: "10px" }}>Title:</label>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
          style={{ width: "100%", padding: "8px" }}
        />

        <label style={{ display: "block", marginTop: "10px" }}>Content:</label>
        <textarea
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          rows="5"
          required
          style={{ width: "100%", padding: "8px" }}
        />

        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "8px 12px",
            backgroundColor: isEdit ? "#17a2b8" : "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          {isEdit ? "Update Blog" : "Submit Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
