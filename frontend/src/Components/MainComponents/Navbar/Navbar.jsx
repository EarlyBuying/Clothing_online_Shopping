import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
 
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="nav_wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        
        <div className="nav_items">
          <div className="nav_item">
            <NotificationsNoneIcon className="icons" />
            <div className="nav_count">1</div>
          </div>
          <div className="nav_item">
            
          <img src='https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
