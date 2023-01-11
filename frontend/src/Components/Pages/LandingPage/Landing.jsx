import React from "react";
import "./landing.css";
import Navbar from "./LandNavbar/Navbar";
import landingImg1 from "../../img/land.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing_page">
      <div className="navbar_landing">
        <Navbar />
      </div>
      <div className="body_landing">
        <img src={landingImg1} alt="" />
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <div className="shopNow_btn">Shop Now</div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
 