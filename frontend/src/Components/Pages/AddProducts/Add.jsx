import React, { useState } from "react";
import Sidebar from "../../MainComponents/Sidebar/Sidebar";
import Navbar from "../../MainComponents/Navbar/Navbar";
import "./add.css";

const Add = () => {
  const [file, setFile] = useState("");

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
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="No image icon"
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              name="Images"
              id="files"
            />
          </div>
          <div className="add_form">
            <form>
              <div className="form_input">
                <label> Item Name</label>
                <input type="text" placeholder="Input Item Name" />
              </div>
              <div className="form_input">
                <label> Item Code</label>
                <input type="text" placeholder="Input Item Code" />
              </div>
              <div className="form_input">
                <label> Item Price</label>
                <input type="text" placeholder="Input Item Price" />
              </div>
              <div className="form_input">
                <label> Item Weight</label>
                <input type="text" placeholder="Input Item Weight" />
              </div>
              <div className="form_input">
                <label> Item Color</label>
                <input type="dropdown" placeholder="Input Item Color" />
              </div>
              <div className="form_input">
                <label> Item Category</label>
                <input type="text" placeholder="Input Item Category" />
              </div>
              <div className="form_textarea">
                <label> Item Description</label>
                <textarea type="text" placeholder="Input Item Description" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
