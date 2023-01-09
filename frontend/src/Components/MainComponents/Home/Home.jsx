import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import "./home.css";
import ChartHome from "./ChartHome";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_container">
        <Navbar />
        <div className="home_mainContainer">
          <ChartHome />
          <div className="home_headContaine">
            <div className="home_summry">
              <div className="monthlyIncome">
                <div className="subtitiles">Monthly Income</div>

                <MonetizationOnIcon className="icons1" />
              </div>
              <h4>$35000</h4>
            </div>
            <div className="home_summry">
              <div className="monthlyIncome">
                <div className="subtitiles">Monthly Orders</div>

                <BookmarkBorderIcon className="icons2" />
              </div>
              <h4>No: 1240</h4>
            </div>
            <div className="home_summry">
              <div className="monthlyIncome">
                <div className="subtitiles">Monthly Customers </div>

                <EmojiPeopleIcon className="icons3" />
              </div>
              <h4> No: 943</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
