import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#537289", padding: "12px" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px", textDecoration: "none", fontWeight: "bold" }}>
        🏠 Home
      </Link>
      <Link to="/blogs" style={{ color: "white", marginRight: "20px", textDecoration: "none", fontWeight: "bold" }}>
        📝 Blogs
      </Link>
      <Link to="/blogs/add" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
        ➕ Add Blog
      </Link>
    </nav>
  );
};

export default Navbar;
