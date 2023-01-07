import React, { useState, useEffect } from "react";
import Sidebar from "../../MainComponents/Sidebar/Sidebar";
import Navbar from "../../MainComponents/Navbar/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import "./view.css";
import axios from "axios";

const View = () => {
  const [allProduct, setAllProducts] = useState([]);

  useEffect(() => {
    function getAllDatas() {
      axios
        .get("http://localhost:4500/product/view")
        .then((res) => {
          console.log(res.data);
          setAllProducts(res.data)
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAllDatas();
  }, []);

  return (
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
                  <TableCell className="view_tabletop">Name</TableCell>
                  <TableCell className="view_tabletop">Image</TableCell>
                  <TableCell className="view_tabletop">Code</TableCell>
                  <TableCell className="view_tabletop">
                    Price&nbsp;($)
                  </TableCell>
                  <TableCell className="view_tabletop">
                    Weight&nbsp;(g)
                  </TableCell>
                  <TableCell className="view_tabletop">Color</TableCell>
                  <TableCell className="view_tabletop">Category</TableCell>
                  <TableCell className="view_tabletop">Description</TableCell>
                  <TableCell className="view_tabletop">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="view_tablebody">
                {allProduct?.map((row) => (
                  <TableRow
                    hover
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className="view_tablecell">{row.name}</TableCell>
                    <TableCell className="view_tablecell">
                      <img src=''  alt="" />
                    </TableCell>
                    <TableCell align="left" className="view_tablecell">
                      {row.code}
                    </TableCell>
                    <TableCell align="left" className="view_tablecell">
                      {row.price}
                    </TableCell>
                    <TableCell align="left" className="view_tablecell">
                      {row.weight}
                    </TableCell>
                    <TableCell align="left" className="view_tablecell">
                      {row.color}
                    </TableCell>
                    <TableCell className="view_tablecell">
                      {row.category}
                    </TableCell>
                    <TableCell className="view_tablecell">
                      {row.description}
                    </TableCell>
                    <TableCell className="view_tablecell action_cell">
                      <EditIcon className="action_icons edit" />
                      <DeleteIcon className="action_icons delete" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default View;
