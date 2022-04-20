import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
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

const Inventory = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    (async () => {
      await axios
        .get("/logistics/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    })();
  }, []);

  const deleteData = async (id, type) => {
    //method for deleting a data
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`/logistics/delete/${id}`);
      await axios
        .get("/logistics/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    }
  };

  const filteredData = data.filter(
    (el) => el?.pID.toLowerCase().indexOf(query) >= 0
  );

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
                -Warehouse Inventory-
              </h1>
            </div>
          </div>
        </Box>
        <br />
        <div class="flex float-right mr-32">
          <div class="flex border-2 border-gray-200 rounded">
            <input
              type="text"
              class="px-4 py-2 w-80"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className=" mx-32 mt-14">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>PID</StyledTableCell>
                  <StyledTableCell align="right">P.Name</StyledTableCell>
                  <StyledTableCell align="right">Avail.C</StyledTableCell>
                  <StyledTableCell align="right">Unit.price</StyledTableCell>
                  <StyledTableCell align="right">Demand</StyledTableCell>
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
                          {value?.pID}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {value?.pName}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {value?.quantity}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {value?.unitPrice}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {value.demand}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <div className=" pr-6 space-x-4">
                            <NavLink to={`/edit/${value._id}`}>
                              <EditIcon className=" border bg-green-600 cursor-pointer" />
                            </NavLink>
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
              onClick={() => navigate("/create")}
            >
              Add Item
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
