import React, { useState } from "react";
import Sidebar from "../../MainComponents/Sidebar/Sidebar";
import Navbar from "../../MainComponents/Navbar/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import "../AddProducts/add.css";
import { storage } from "../../FireBase/FireBaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Update = ({ onClick, id, formData }) => {
  const [file, setFile] = useState("");
  const [counter, setCounter] = useState("");
  const uplodaImage = () => {
    if (!file) {
      alert("There is not any image");
    }
    const storagePath = ref(storage, `/images/${file.name}`);
    const uploadTast = uploadBytesResumable(storagePath, file);
    uploadTast.on(
      "state_changed",
      (snapshot) => {
        const percentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setCounter(percentage);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTast.snapshot.ref).then((url) => {
          console.log(url);
          setImageURL(url);
        });
      }
    );

    console.log(file);
  };

  const [imageURL, setImageURL] = useState(formData.imageURL);
  const [name, setName] = useState(formData.name);
  const [code, setCode] = useState(formData.code);
  const [price, setPrice] = useState(formData.price);
  const [weight, setWeight] = useState(formData.weight);
  const [color, setColor] = useState(formData.color);
  const [category, setCategory] = useState(formData.category);
  const [description, setDescription] = useState(formData.description);

  function sendItems(e) {
    e.preventDefault();

    const itemsSet = {
      imageURL,
      name,
      code,
      price,
      weight,
      color,
      category,
      description,
    };
    console.log(itemsSet);
    axios
      .put(`http://localhost:4500/product/${id}`, itemsSet)
      .then(() => {
        setImageURL("");
        setName("");
        setCode("");
        setPrice("");
        setWeight("");
        setColor("");
        setCategory("");
        setDescription("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "New product has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        return onClick();
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
          <h2>Update Product</h2>
        </div>
        {/* form Body */}
        <div type="text" value={formData.Id} disabled="true" />
        <div className="add_body">
          <div className="add_image">
            <div className="image_section">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="No icon"
              />

              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                name="Images"
                id="imageFile"
              />

              <button className="img_upbtn" onClick={uplodaImage}>
                {!counter ? <>Upload Image </> : <>{counter}%</>}
              </button>
            </div>
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
              <button onClick={sendItems}>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
