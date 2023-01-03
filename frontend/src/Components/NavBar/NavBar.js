import React, { useState } from "react";
import NavImg from "../img/gg.jpg";
import "./NavBar.css";

const NavBar = () => {
  const [slideOpen, setSlideOpen] = useState(true);
  const slideBtn = () => setSlideOpen(!slideOpen);

  return (
    <nav className="sidebar" style={{ width: slideOpen ? "250px" : "50px" }}>
      {/*---------- header section in navbar ------------------------------*/}

      <header>
        <div className="logo_text">
          <span className="logo">
            {slideOpen && <img src={NavImg} alt="NavBar logo" />}
          </span>
          <div
            className="topic header_text"
            style={{ display: slideOpen ? "flex" : "none" }}
          >
            <span className="header_name">Early Buying</span>
            <span className="header_subname">Admin Panel</span>
          </div>
          {slideOpen ? (
            <i className="bx  bxs-chevrons-left" onClick={slideBtn}></i>
          ) : (
            <i className="bx  bxs-chevrons-right" onClick={slideBtn}></i>
          )}
        </div>
      </header>

      {/*---------- body section in navbar ------------------------------*/}

      <div className="menu-bar">
        <div className="menu">
          <li className="search_box">
            <i class="bx bx-search-alt bx-tada icons"></i>
            <input type="search" placeholder="Search" />
          </li>

          <ul className="menu_links">
            <li className="nav_link">
              <a href="">
                <i class="bx bxs-home-alt-2 bx-tada icons"></i>
                {slideOpen && <span className="text nav_text">Dashboard</span>}
              </a>
            </li>

            <li className="nav_link">
              <a href="">
                <i class="bx bxs-objects-vertical-bottom bx-tada icons"></i>
                {slideOpen && <span className="text nav_text">View Items</span>}
              </a>
            </li>

            <li className="nav_link">
              <a href="">
                <i class="bx  bxs-add-to-queue bx-tada icons"></i>
                {slideOpen && <span className="text nav_text">Add Items</span>}
              </a>
            </li>

            <li className="nav_link">
              <a href="">
                <i class="bx bxs-universal-access bx-tada icons"></i>
                {slideOpen && <span className="text nav_text">Customers</span>}
              </a>
            </li>

            <li className="nav_link">
              <a href="">
                <i class="bx bxs-cart-download bx-tada icons"></i>
                {slideOpen && <span className="text nav_text">Orders</span>}
              </a>
            </li>
          </ul>
        </div>

        {/*---------- logout btn in navbar ------------------------------*/}

        <div className="bottom_content">
          <li className="">
            <a href="">
              <i class="bx bx-log-out bx-tada icons"></i>
              {slideOpen && <span className="text nav_text">Logout</span>}
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
