/*import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    alert(`Simulated delete for blog ID ${id}`);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h2>📝 Blog Posts</h2>
      <button
        onClick={() => navigate("/blogs/add")}
        style={{
          padding: "8px 12px",
          marginBottom: "15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        ➕ Add New Blog
      </button>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9"
          }}
        >
          <h3
            style={{ cursor: "pointer", color: "#007BFF" }}
            onClick={() => navigate(`/blogs/${post.id}`)}
          >
            {post.title}
          </h3>
          <p>{post.body.slice(0, 100)}...</p>
          <div>
            <button
              onClick={() => navigate(`/blogs/edit/${post.id}`)}
              style={{
                marginRight: "10px",
                padding: "5px 10px",
                backgroundColor: "#ffc107",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "4px"
              }}
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#dc3545",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "4px"
              }}
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
*/

import React from "react";
import { useNavigate } from "react-router-dom";

const BlogList = ({ blogs, deleteBlog }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>📝 Blog Posts</h2>
      <button
        onClick={() => navigate("/blogs/add")}
        style={{
          padding: "8px 12px",
          marginBottom: "15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        ➕ Add New Blog
      </button>

      {blogs.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9"
          }}
        >
          <h3
            style={{ cursor: "pointer", color: "#007BFF" }}
            onClick={() => navigate(`/blogs/${post.id}`)}
          >
            {post.title}
          </h3>
          <p>{post.body.slice(0, 100)}...</p>
          <div>
            <button
              onClick={() => navigate(`/blogs/edit/${post.id}`)}
              style={{
                marginRight: "10px",
                padding: "5px 10px",
                backgroundColor: "#ffc107",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "4px"
              }}
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => deleteBlog(post.id)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#dc3545",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                borderRadius: "4px"
              }}
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
