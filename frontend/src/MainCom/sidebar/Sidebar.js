import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import StoreIcon from "@mui/icons-material/Store";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebarr">
      {/* --------Header-------------- */}
      <div className="top">
        <span className="logo">EarlyBuying</span>
      </div>
      <hr />

      {/* --------Lists-------------- */}
      <div className="center">
        <ul>

          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title">Lists</p>
          <li>
            <StoreIcon className="icon" />
            <span>All Pruducts</span>
          </li>

          <li>
            <AddIcon className="icon" />
            <span>Add Products</span>
          </li>

          <li>
            <SupportAgentIcon className="icon" />
            <span>Customers</span>
          </li>

          <li>
            <ShoppingCartIcon className="icon" />
            <span>Orders</span>
          </li>

          <p className="title">Service</p>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
       {/* --------Bottom-------------- */}
      <div className="bottom">
        <div className="colorOption">a</div>
        <div className="colorOption">a</div>
      </div>
    </div>
  );
};

export default Sidebar;
