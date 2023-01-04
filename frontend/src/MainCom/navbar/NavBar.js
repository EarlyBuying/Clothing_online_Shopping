import React from "react";
import "./navbar.css";
import man from './imgs/man.png'
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icons" />
            English
          </div>
          <div className="item">
            <FullscreenExitIcon className="icons" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icons" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icons" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className="icons" />
          </div>
          <div className="item">
            <img src={man} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
