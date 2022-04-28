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

  const [eventPlace, setEventPlace] = useState(undefined);
  const [ePrice, setEPrice] = useState(undefined);
  const [ePplcount, setEPplcount] = useState(undefined);
  const [ePackage, setEPackage] = useState(undefined);
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const isCheck = () => {
    if (
      eventPlace === undefined ||
      ePrice === undefined ||
      ePplcount === undefined ||
      ePackage === undefined
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
        "/event/create",
        { eventPlace, ePrice, ePplcount, ePackage },
        config
      );
      toast("Success! Added 😘");
      setEventPlace("");
      setEPrice("");
      setEPplcount("");
      setEPackage("");
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
                onClick={() => navigate("/eventdisplay")}
              >
                Back
              </Button>
            </div>
          </div>
        </Box>
        <div className=" text-4xl text-center mt-10">
          Add Event <br />
        </div>
        <form onSubmit={handleSubmit}>
          <div class="container px-36 py-24 mx-auto  mt-4">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
              Event Name
              </h1>
              <TextField
                id="outlined-basic"
                label="Event Name"
                placeholder="Event Name"
                variant="outlined"
                type="text"
                value={eventPlace}
                onChange={(e) => setEventPlace(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
              Event Price
              </h1>
              <TextField
                id="outlined-basic"
                label="Event Price"
                variant="outlined"
                placeholder="Event Price"
                type="number"
                value={ePrice}
                onChange={(e) => setEPrice(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
              Event Hall No
              </h1>
              <TextField
                id="outlined-basic"
                label="Event Hall No"
                placeholder="Event Hall No"
                variant="outlined"
                type="number"
                value={ePplcount}
                onChange={(e) => setEPplcount(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Package Name
              </h1>
              <TextField
                id="outlined-basic"
                label="Package Name"
                placeholder="Package Name"
                variant="outlined"
                type="text"
                value={ePackage}
                onChange={(e) => setEPackage(e.target.value)}
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
