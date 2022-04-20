import React, { useState, useEffect } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Allfeedbacks = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  

  useEffect(() => {
    (async () => {
      await axios
        .get("/feedback/")
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();
  }, []);

  const deleteData = async (id, type) => {
    //method for deleting a data
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`/feedback/delete/${id}`);
      await axios
        .get("/feedback/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    }
  };


  return (
    <>
      <div>
        <Box
          sx={{
            px: 20,
            py: 4,
            color: "red",
            border: 1,
            borderColor: "primary.main",
          }}
        >
          <div className=" inline-flex  mx-auto">
            <div className=" mt-2 -translate-x-8">
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/adminhome")}
              >
                Back
              </Button>
            </div>
            <div>
              <h1 className=" ml-44 text-5xl text-lime-500 font-semibold">
                -All Feedbacks-
              </h1>
            </div>
          </div>
        </Box>
        <div className=" mx-32 mt-10">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Feedback Comment</StyledTableCell>
                  <StyledTableCell align="right">Ratings</StyledTableCell>
                  <StyledTableCell align="right">Update/Remove</StyledTableCell>
                </TableRow>
              </TableHead>

              {data.map((value) => {
                return (
                  <TableBody>
                    <StyledTableRow key={value?._id}>
                      <StyledTableCell component="th" scope="row">
                        <Link to={`/feedback/get/${value._id}`}>
                        {value?.fName}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value?.fComment}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value?.fRating}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <div className=" pr-6 space-x-4">
                          <NavLink to={`/fedit/${value._id}`}>
                            <EditIcon className=" border text-green-600 cursor-pointer" />
                          </NavLink>
                          <DeleteIcon className=" border text-red-600 cursor-pointer" 
                          onClick={() => deleteData(value._id)}/>
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                );
              })}
            </Table>
          </TableContainer>
        
        </div>
      </div>
    </>
  );
};

export default Allfeedbacks;
