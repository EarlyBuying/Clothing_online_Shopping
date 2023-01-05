import React from "react";
import "./Login.css";
import rightimg from "../img/right2.jpg";
import rightimg2 from "../img/right1.jpg";

const Login = () => {
  return (
    <div className="log_container">
      <div className="left_side">
        <img src={rightimg} alt="" />
      </div>
      <form action="" className="log_form">
        <h2>Sign In</h2>
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
          <a href="/add">Signup</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
