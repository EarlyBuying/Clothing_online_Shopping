import React from "react";
import "./Register.css";
import signup from "../../img/signup.jpg";
import Navbar from "../LandingPage/LandNavbar/Navbar";
import { Link } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <form action="" className="form">
          <h2 className="sign_title">Sign Up</h2>
          <input type="text" className="box" placeholder="Enter Name" />

          <input
            type="password"
            className="box"
            placeholder="Enter Mobile Number"
          />

          <input type="password" className="box" placeholder="Enter City" />

          <input type="password" className="box" placeholder="Enter Email" />

          <input type="password" className="box" placeholder="Enter Password" />
          <input
            type="submit"
            className="box subBtn"
            placeholder="Enter Password"
          />

          <p className="para_text">
            {" "}
            Already have a account?
            <span className="login_link">
              {" "}
              <a href="/login"> Log In</a>
            </span>{" "}
          </p>
          <p className="land_back_btn">
            <span>
              <Link to="/landing" style={{ textDecoration: "none" }}>
                <CloseIcon />
              </Link>
            </span>
          </p>
        </form>
        <div className="right_Side">
          <img src={signup} alt="" />
        </div>
      </div>
    </>
  );
};

export default Register;
