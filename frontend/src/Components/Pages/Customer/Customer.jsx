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
import "../ViewProducts/view.css";
import axios from "axios";

import Swal from "sweetalert2"; 

const Customer = () => {
  const [allCustomer, setAllCustomer] = useState([]);

  // ----------------View---------------
  useEffect(() => {
    function getAllDatas() {
      axios
        .get("http://localhost:4500/customer/")
        .then((res) => {
          console.log(res.data);
          setAllCustomer(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAllDatas();
  }, []);

  // ---------------Delete-------------------
  const deleteCustomer = (_id) => {
    axios.delete(`http://localhost:4500/customer/${_id}`).then((res) => {
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

    const newDatas = [...allCustomer].filter((row) => {
      return row._id !== _id;
    });
    setAllCustomer(newDatas);
  };

  return (
    <>
      <div className="view">
        <Sidebar />
        <div className="viewContainer">
          <Navbar />
          <div className="view_header">
            <h2>Viwe All Customers</h2>
          </div>
          {/* -----------Table ----------------------- */}

          <div className="view_body">
            <TableContainer className="view_table" component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow className="viwerow">
                    <TableCell align="center" className="view_tabletop">
                      Full Name
                    </TableCell>
                    <TableCell align="center" className="view_tabletop">
                      Mobile Number
                    </TableCell>
                    <TableCell align="center" className="view_tabletop">
                      City
                    </TableCell>
                    <TableCell align="center" className="view_tabletop">
                      Email
                    </TableCell>
                    <TableCell align="center" className="view_tabletop">
                      Password
                    </TableCell>

                    <TableCell align="center" className="view_tabletop    ">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="view_tablebody">
                  {allCustomer?.map((row, id) => (
                    <TableRow
                      hover
                      key={id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="center" className="view_tablecell">
                        {row.fullName}
                      </TableCell>

                      <TableCell
                        align="center"
                        className="view_tablecell action_cell"
                      >
                        {row.mobileNumber}
                      </TableCell>
                      <TableCell align="center" className="view_tablecell">
                        {row.City}
                      </TableCell>
                      <TableCell align="center" className="view_tablecell">
                        {row.Email}
                      </TableCell>
                      <TableCell align="center" className="view_tablecell">
                        {row.Password}
                      </TableCell>

                      <TableCell align="center" className="view_tablecell   ">
                        <button
                          onClick={() => deleteCustomer(row._id)}
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
    </>
  );
};

export default Customer;
