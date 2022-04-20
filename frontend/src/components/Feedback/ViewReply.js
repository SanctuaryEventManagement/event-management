import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";

import logo from "../../assets/logo.png";

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

const ViewReply = () => {
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
  return (
    <>
      <React.Fragment>
        <CardContent className=" bg-neutral-800">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <div className=" text-right">
              <Button variant="contained">My Account</Button>
            </div>
            <div className=" mx-96 translate-x-40">
              <img className="lg:w-80 w-80 max-w-fit" src={logo} />
            </div>
          </Typography>
          <hr />
          <Typography variant="body2">
            <div className=" pl-64  flex pt-4 ">
              <div className=" px-2">
                <Button variant="contained" color="primary">
                  Home
                </Button>
              </div>
              <div className=" px-2">
                <Button variant="contained" color="primary">
                  Booking & Ticket Reservations
                </Button>
              </div>
              <div className=" px-2">
                <NavLink to="/adminhome">
                  <Button variant="contained" color="primary">
                    Login
                  </Button>
                </NavLink>
              </div>
              <div className=" px-2">
                <Button variant="contained" color="primary">
                  Lerning Center
                </Button>
              </div>
              <div className=" px-2">
                <Button variant="contained" color="primary">
                  Contact Us
                </Button>
              </div>
            </div>
          </Typography>
        </CardContent>
      </React.Fragment>
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
                onClick={() => navigate("/")}
              >
                Back
              </Button>
            </div>
          </div>
        </Box>
        <div className=" text-4xl text-center mt-10">
          View All Replies <br />
        </div>
        <div className=" mx-32 mt-10">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">
                    Feedback Comment
                  </StyledTableCell>
                  <StyledTableCell align="right">Ratings</StyledTableCell>
                  <StyledTableCell align="right">Response</StyledTableCell>
                </TableRow>
              </TableHead>

              {data.map((value) => {
                return (
                  <TableBody>
                    <StyledTableRow key={value?._id}>
                      <StyledTableCell component="th" scope="row">
                        {value?.fName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value?.fComment}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value?.fRating}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value?.fReply}
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

export default ViewReply;
