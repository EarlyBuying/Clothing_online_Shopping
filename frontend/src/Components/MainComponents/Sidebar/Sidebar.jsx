import React from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import BallotIcon from "@mui/icons-material/Ballot";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* --------Header-------------- */}
      <div className="side_top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="side_logo">Early Buing.lk</span>
        </Link>
      </div>
      <hr />
      {/* --------Lists-------------- */}
      <div className="side_mid">
        <ul>
          <p className="side_title">Main</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="side_Icons" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="side_title">Item Side</p>
          <Link to="/view" style={{ textDecoration: "none" }}>
            <li>
              <BallotIcon className="side_Icons" />
              <span>All Products</span>
            </li>
          </Link>
          <Link to="/add" style={{ textDecoration: "none" }}>
            <li>
              <AddIcon className="side_Icons" />
              <span>Add Products</span>
            </li>
          </Link>
          <p className="side_title">Customer Side</p>
          <Link to="/customer" style={{ textDecoration: "none" }}>
            <li>
              <SupportAgentIcon className="side_Icons" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/order" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingCartIcon className="side_Icons" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/feedback" style={{ textDecoration: "none" }}>
            <li>
              <FeedbackIcon className="side_Icons" />
              <span>View Feedback</span>
            </li>
          </Link>
          {/* --------Log-------------- */}
          <p className="side_title">Exit</p>
          <li className="side_bottom_btn">
            <LogoutIcon className="side_Icons" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
