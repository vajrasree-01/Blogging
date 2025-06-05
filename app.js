import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./BlogNavbar";
import BlogDetails from "./BlogDetails";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

const Home = () => <h2>🏡 Welcome to the Blog Site!</h2>;

const App = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from API initially
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 10))) // use top 10
      .catch((err) => console.error(err));
  }, []);

  const addBlog = (newBlog) => {
    newBlog.id = Date.now(); // unique ID
    setBlogs([newBlog, ...blogs]);
  };

  const updateBlog = (updatedBlog) => {
    setBlogs(blogs.map((b) => (b.id === updatedBlog.id ? updatedBlog : b)));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blogs"
            element={<BlogList blogs={blogs} deleteBlog={deleteBlog} />}
          />
          <Route path="/blogs/:id" element={<BlogDetails blogs={blogs} />} />
          <Route path="/blogs/add" element={<BlogForm onSubmit={addBlog} />} />
          <Route
            path="/blogs/edit/:id"
            element={<BlogForm blogs={blogs} onSubmit={updateBlog} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;