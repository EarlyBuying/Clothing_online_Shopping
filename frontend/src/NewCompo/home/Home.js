import React from "react";
import NavBar from "../../MainCom/navbar/NavBar";
import Sidebar from "../../MainCom/sidebar/Sidebar";
import Widget from "../../MainCom/widgets/Widget";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar />

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};

export default Home;
