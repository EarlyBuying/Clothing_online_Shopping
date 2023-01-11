import React, { useState, useEffect } from "react";
import "./shop.css"; 
import Navbar from "../LandingPage/LandNavbar/Navbar";
import axios from "axios";

const Shop = () => {
  const [allProduct, setAllProducts] = useState([]);
  useEffect(() => {
    function getAllDatas() {
      axios
        .get("http://localhost:4500/product/")
        .then((res) => {
          console.log(res.data);
          setAllProducts(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAllDatas();
  }, []);
  return (
    <div className="shop_container">
      <Navbar />
      <div className="shop_header">
        {allProduct?.map((row, id) => (
          <div key={id} className="shop_items">
            <div className="shop_item">
              <p className="item_name_shop">{row.name}</p>

              <img src={row.imageURL} alt="" />

              <div className="shop_price"> {row.price}$</div>
              <div className="shop_color">{row.color}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
