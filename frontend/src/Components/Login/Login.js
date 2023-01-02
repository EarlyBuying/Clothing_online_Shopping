import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="mainContaine">
      <div className="leftSide">
        <div className="imagebox">{/* image here */}</div>
      </div>
      <div className="rightSide">
        <div>
          <div className="mainForm">
            <div className="content_email">
              <h3>Email</h3>
              <input type="text" placeholder="Input Your Email Here" />
            </div>
            <div className="content_password">
              <h3>Password</h3>
              <input type="text" placeholder="Input Your Password Here" />
            </div>
            <div className="checkBox">
              <h4>CheckBox</h4>
              <input type="checkbox" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
