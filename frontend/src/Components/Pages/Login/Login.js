import React from "react";
import "./Login.css";
import rightimg from "../../img/right2.jpg"; 
import Navbar from "../LandingPage/LandNavbar/Navbar";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
     <Navbar />
    <div className="log_container">
      <div className="left_side">
        <img src={rightimg} alt="" />
      </div>
      <form action="" className="log_form">
        <h2 className="sign_in_title">Sign In</h2>
        <input type="email" className="log_box" placeholder="Enter Email" />

        <input
          type="password"
          className="log_box"
          placeholder="Enter Password"
          />
        <input
          type="submit"
          className="log_box log_subBtn"
          placeholder="Enter Password"
        />
        <p>
          Don't have a account?
          <a href="/signup">Signup</a>
        </p>
        <p className="land_back_btn">
            <span>
              <Link to="/landing" style={{textDecoration: 'none'}}><CloseIcon/></Link>
            </span>
          </p>
      </form>
    </div>
          </>
  );
};

export default Login;
