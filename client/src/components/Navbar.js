import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <button style={{ marginRight: "10px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Query</Link>
      </button>
      <button>
        <Link to="/schema" style={{ textDecoration: "none", color: "inherit" }}>Schema</Link>
      </button>
    </nav>
  );
};

export default Navbar;
