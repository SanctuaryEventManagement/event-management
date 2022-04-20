import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@mui/material";

const Create = () => {
  const navigate = useNavigate();

  const [pID, setPid] = useState(undefined);
  const [pName, setPname] = useState(undefined);
  const [quantity, setQuantity] = useState(undefined);
  const [unitPrice, setUnitPrice] = useState(undefined);
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const demand = "high";

  const isCheck = () => {
    if (
      pID === undefined ||
      pName === undefined ||
      quantity === undefined ||
      unitPrice === undefined
    )
      toast("Plase fill out the required fields!");
  };

  const handleSubmit = async (e) => {
    //logic for adding data to the BACKENDe
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      //exception handling
      var { data } = await axios.post(
        "/logistics/create",
        { pID, pName, quantity, unitPrice, demand },
        config
      );
      toast("Success! Added 😘");
      setPid("");
      setPname("");
      setQuantity("");
      setUnitPrice("");
      setLoading(false);
    } catch (error) {
      toast(`Error! ${error?.response?.data?.error}`);
      setLoading(false);
      setIsError(true);
      setTimeout(() => {}, 5000); //5s
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
                onClick={() => navigate("/inventory")}
              >
                Back
              </Button>
            </div>
          </div>
        </Box>
        <div className=" text-4xl text-center mt-10">
          Add Item <br />
        </div>
        <form onSubmit={handleSubmit}>
          <div class="container px-36 py-24 mx-auto  mt-4">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                P.ID
              </h1>
              <TextField
                id="outlined-basic"
                label="PID"
                placeholder="PID"
                variant="outlined"
                type="text"
                value={pID}
                onChange={(e) => setPid(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                P.Name
              </h1>
              <TextField
                id="outlined-basic"
                label="PName"
                variant="outlined"
                placeholder="PName"
                type="text"
                value={pName}
                onChange={(e) => setPname(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Qty
              </h1>
              <TextField
                id="outlined-basic"
                label="Qty"
                placeholder="Qty"
                variant="outlined"
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Unit Price
              </h1>
              <TextField
                id="outlined-basic"
                label="Unit Price"
                placeholder="Unit parice"
                variant="outlined"
                type="text"
                value={unitPrice}
                onChange={(e) => setUnitPrice(e.target.value)}
                required
              />
            </div>
            <br />
            {isError && (
              <small className="mt-3 text-danger mx-96 mr-20 text-red-600">
                Something went wrong. Please try again later.
              </small>
            )}
            <div className=" text-center mx-auto">
              <div className=" mt-2 ">
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  disabled={loading}
                  onClick={isCheck}
                >
                  <h6 style={{ marginLeft: "5px" }}> </h6>{" "}
                  {loading ? "Submitting..." : "Submit"}
                </Button>
                <ToastContainer style={{ marginTop: "50px" }} />
              </div>
            </div>
          </div>
        </form>

        <br />
        <br />
      </div>
    </>
  );
};

export default Create;
