import React, { useState } from "react";
import Sidebar from "../../MainComponents/Sidebar/Sidebar";
import Navbar from "../../MainComponents/Navbar/Navbar";
import axios from "axios";
import "./add.css";

const Add = () => {
  // const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function sendItems(e) {
    e.preventDefault();

    const itemsSet = {
      name,
      code,
      price,
      weight,
      color,
      category,
      description,
    };
    axios
      .post("http://localhost:4500/product/add", itemsSet)
      .then(() => {
        alert("Successfuly added");
        setName("");
        setCode("");
        setPrice("");
        setWeight("");
        setColor("");
        setCategory("");
        setDescription("");
      })
      .catch(() => {
        alert("Server Error");
      });
  }

  return (
    <div className="add">
      <Sidebar />
      <div className="addContainer">
        <Navbar />
        {/* form Header */}
        <div className="add_header">
          <h2>Add New Products</h2>
        </div>
        {/* form Body */}

        <div className="add_body">
          <div className="add_image">
            {/* <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="No image icon"
            /> */}
            {/* <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              name="Images"
              id="files"
            /> */}
          </div>
          <div className="add_form">
            <form>
              <div className="form_input">
                <label> Item Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Input Item Name"
                />
              </div>
              <div className="form_input">
                <label> Item Code</label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Input Item Code"
                />
              </div>
              <div className="form_input">
                <label> Item Price</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Input Item Price"
                />
              </div>
              <div className="form_input">
                <label> Item Weight</label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Input Item Weight"
                />
              </div>
              <div className="form_input">
                <label> Item Color</label>
                <input
                  type="dropdown"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Input Item Color"
                />
              </div>
              <div className="form_input">
                <label> Item Category</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Input Item Category"
                />
              </div>
              <div className="form_textarea">
                <label> Item Description</label>
                <textarea
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Input Item Description"
                />
              </div>
              <button onClick={sendItems}>Product Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
