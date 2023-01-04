import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "./widget.css";

const Widget = ({ type }) => {
  let datas;

  //temport
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      datas = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineIcon
            className="w_icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "order":
      datas = {
        title: "ORDERS",
        isMoney: false,
        link: "View net earnings ",
        icon: (
          <AddShoppingCartIcon
            className="w_icon"
            style={{ backgroundColor: "rgba(200, 18, 200, 0.2)", color: "blue" }}
          />
        ),
      };
      break;
    case "earning":
      datas = {
        title: "EARNING",
        isMoney: true,
        link: "See all users",
        icon: (
          <MonetizationOnIcon
            className="w_icon"
            style={{ backgroundColor: "rgba(200, 158, 0, 0.2)", color: "red" }}
          />
        ),
      };
      break;
    case "balance":
      datas = {
        title: "BALANCE",
        isMoney: true,
        link: "See detaisl",
        icon: (
          <AccountBalanceWalletIcon
            className="w_icon"
            style={{
              backgroundColor: "rgba(0, 128, 10, 1.2)",
              color: "yellow",
            }}
          />
        ),
      };
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{datas.title}</span>
        <span className="counter">
          {datas.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{datas.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20 %
        </div>
        {datas.icon}
      </div>
    </div>
  );
};

export default Widget;
