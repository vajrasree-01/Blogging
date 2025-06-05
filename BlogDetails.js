/*import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <Link to="/blogs" style={{ color: "blue" }}>
        🔙 Back to blogs
      </Link>
    </div>
  );
};

export default BlogDetails;*/


import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <p>Blog not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <Link to="/blogs" style={{ color: "blue" }}>
        🔙 Back to blogs
      </Link>
    </div>
  );
};

export default BlogDetails;
