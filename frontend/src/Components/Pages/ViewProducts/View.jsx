import React, { useState, useEffect } from "react";
import Sidebar from "../../MainComponents/Sidebar/Sidebar";
import Navbar from "../../MainComponents/Navbar/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./view.css";
import axios from "axios";

import Swal from "sweetalert2";
import Update from "../UpdateProducts/Update";

const View = () => {
  const [allProduct, setAllProducts] = useState([]);
  const [edit, setEdit] = useState(false);
  const [Id, setId] = useState("");
  const [data, setData] = useState({});

  // ----------------View---------------
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

  // ---------------Delete-------------------
  const deleteProduct = (_id) => {
    axios.delete(`http://localhost:4500/product/${_id}`).then((res) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    });

    const newDatas = [...allProduct].filter((row) => {
      return row._id !== _id;
    });
    setAllProducts(newDatas);
  };

  // ---------------Edit-------------------
  const editData = (e, data) => {
    console.log();
    setId(e.target.value);
    setData(data);
    setEdit(true);
  };

  return (
    <>
      {edit ? (
        <Update onClick={() => setEdit(false)} id={Id} formData={data} />
      ) : (
        <div className="view">
          <Sidebar />
          <div className="viewContainer">
            <Navbar />
            <div className="view_header">
              <h2>Viwe All Products</h2>
            </div>
            {/* -----------Table ----------------------- */}

            <div className="view_body">
              <TableContainer className="view_table" component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow className="viwerow">
                      <TableCell align="center" className="view_tabletop">
                        Name
                      </TableCell>
                      <TableCell align="center" className="view_tabletop">
                        Image
                      </TableCell>
                      <TableCell align="center" className="view_tabletop">
                        Code
                      </TableCell>
                      <TableCell align="center" className="view_tabletop">
                        Price&nbsp;($)
                      </TableCell>
                      <TableCell align="center" className="view_tabletop">
                        Weight&nbsp;(g)
                      </TableCell>
                      <TableCell align="center" className="view_tabletop">
                        Color
                      </TableCell>
                      <TableCell align="center" className="view_tabletop">
                        Category
                      </TableCell>
                      <TableCell align="center" className="view_tabletop">
                        Description
                      </TableCell>
                      <TableCell align="center" className="view_tabletop    ">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="view_tablebody">
                    {allProduct?.map((row, id) => (
                      <TableRow
                        hover
                        key={id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center" className="view_tablecell">
                          {row.name}
                        </TableCell>
                        <TableCell align="center" className="view_tablecell">
                          <img src={row.imageURL} alt="" />
                        </TableCell>
                        <TableCell
                          align="center"
                          className="view_tablecell action_cell"
                        >
                          {row.code}
                        </TableCell>
                        <TableCell align="center" className="view_tablecell">
                          {row.price}
                        </TableCell>
                        <TableCell align="center" className="view_tablecell">
                          {row.weight}
                        </TableCell>
                        <TableCell align="center" className="view_tablecell">
                          {row.color}
                        </TableCell>
                        <TableCell align="center" className="view_tablecell">
                          {row.category}
                        </TableCell>
                        <TableCell align="center" className="view_tablecell ">
                          {row.description}
                        </TableCell>
                        <TableCell align="center" className="view_tablecell   ">
                          <button
                            value={row._id}
                            onClick={(e) => editData(e, row)}
                            className="edit"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => deleteProduct(row._id)}
                            className="delete"
                          >
                            Delete
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default View;
