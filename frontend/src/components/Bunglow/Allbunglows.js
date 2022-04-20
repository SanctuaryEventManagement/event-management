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

const Allbunglow = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    (async () => {
      await axios
        .get("/bunglow/")
        .then((res) => {setData(res?.data); console.log(res)})
        .catch((error) => alert(error));
    })();
  }, []);

  const deleteData = async (id, type) => {
    //method for deleting a data
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`/bunglow/delete/${id}`);
      await axios
        .get("/bunglow/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    }
  };

  const filteredData = data.filter(
    (el) => el?.bunglowPlace.toLowerCase().includes(query) >= 0
  );

  // console.log(filteredData);
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
                onClick={() => navigate("/bunglow")}
              >
                Back
              </Button>
            </div>
            <div>
              <h1 className=" ml-44 text-5xl text-lime-500 font-semibold">
                -Event Management-
              </h1>
            </div>
          </div>
        </Box>
        <br />
        {/* <div class="flex float-right mr-32">
          <div class="flex border-2 border-gray-200 rounded">
            <input
              type="text"
              class="px-4 py-2 w-80"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div> */}
        <div className=" mx-32 mt-14">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Event Reference No</StyledTableCell>
                  <StyledTableCell align="right">Event Name</StyledTableCell>
                  <StyledTableCell align="right">Event Price</StyledTableCell>
                  <StyledTableCell align="right">Event Hall No</StyledTableCell>
                  <StyledTableCell align="right">Package Name</StyledTableCell>
                  <StyledTableCell align="right">Update/Remove</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredData?.length === 0 ? ( //conditional satement
                  <center>
                    <h1 style={{ color: "red" }}>
                      Oops.. There are no data Yet 😒{" "}
                    </h1>
                  </center>
                ) : (
                  filteredData?.map((value) => {
                    return (
                      <StyledTableRow key={value?._id}>
                        <StyledTableCell component="th" scope="row">
                          {"B_Ref"+Math.random().toString().substring(0, 10)*100000000}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {value?.bunglowPlace}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          Rs.{value?.bPrice}
                        </StyledTableCell>
                        <StyledTableCell align="right" className="-translate-x-10">
                          {value?.bPplcount}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {value.bPackage}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <div className=" pr-6 space-x-4">
                            <Link to={`/bunglowedit/${value._id}/`}>
                              <EditIcon className=" border bg-green-600 cursor-pointer" />
                            </Link>
                            <DeleteIcon
                              className=" border bg-red-600 cursor-pointer"
                              onClick={() => deleteData(value._id)}
                            />
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <div className=" mx-auto mt-10 text-right">
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/bunglowcreate")}
            >
              Add Event
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allbunglow;
