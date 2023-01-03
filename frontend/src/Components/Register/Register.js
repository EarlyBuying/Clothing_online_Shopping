import React from "react";
import "./Register.css"; 
import signup from "../img/signup.jpg";

const Register = () => {
  return (
    <div className="container">
      <form action="" className="form">
        <h2>Sign Up</h2>
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
            <a href="/"> Log In</a>
          </span>{" "}
        </p>
      </form>
      <div className="right_Side">
        <img src={signup} alt="" />
      </div>
    </div>
  );
};

export default Register;
