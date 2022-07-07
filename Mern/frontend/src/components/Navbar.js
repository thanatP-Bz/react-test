import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h3>Workout From Home</h3>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
