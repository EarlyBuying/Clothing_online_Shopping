import React from "react";
import "./Login.css";
import rightimg from "../img/right2.jpg";
import rightimg2 from "../img/right1.jpg";

const Login = () => {
  return (
    <div className="container">
      <div className="right_Side">
        <img src={rightimg} alt="" />
      </div>
      <form action="" className="form">
        <h2>Sign In</h2>
        <input type="email" className="box" placeholder="Enter Email" />

        <input type="password" className="box" placeholder="Enter Password" />
        <input
          type="submit"
          className="box subBtn"
          placeholder="Enter Password"
        />
        <a href="">Forget Password?</a>
      </form>
    </div>
  );
};

export default Login;
