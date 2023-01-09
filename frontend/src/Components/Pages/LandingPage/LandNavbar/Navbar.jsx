import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navBar_land">
      <div className="nav_wrapper_land">
        <div className="nav_title_nav">
          <Link style={{textDecoration: 'none'}}>
            <h1 className="land_heding">Early Buying</h1>
          </Link>
        </div>

        <div className="nav_item_land">
          <Link to="/login" style={{textDecoration: 'none'}}>
            {" "}
            <div className="login_btn">Login</div>
          </Link>
          <Link to="/signup" style={{textDecoration: 'none'}}>
            {" "}
            <div className="login_btn">Register</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
