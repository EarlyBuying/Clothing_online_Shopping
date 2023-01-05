import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar"; 
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_container">
        <Navbar />
        <h1>Under the maintenance</h1>
       </div>
    </div>
  );
};

export default Home;
