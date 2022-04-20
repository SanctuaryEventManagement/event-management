import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import logo from "../../assets/logo.png";

const Create = () => {
  const navigate = useNavigate();

  const [fName, setfName] = useState("");
  const [fComment, setfComment] = useState(undefined);
  const [fRating, setfRating] = useState(undefined);
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const fReply = "No Reply";

  const isCheck = () => {
    if (fName === undefined || fComment === undefined || fRating === undefined)
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
        "/feedback/create",
        { fName, fComment, fRating, fReply },
        config
      );
      toast("Success! Added 😘");
      setfName("");
      setfComment("");
      setfRating("");
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
            Add Feedback <br />
          </div>
          <form onSubmit={handleSubmit}>
            <div class="container px-36 py-24 mx-auto  mt-4">
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                  Name
                </h1>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  placeholder="Name"
                  variant="outlined"
                  type="text"
                  value={fName}
                  onChange={(e) => setfName(e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                  Feedback
                </h1>
                <TextField
                  id="outlined-basic"
                  label="Feedback"
                  variant="outlined"
                  placeholder="Feedback"
                  type="text"
                  value={fComment}
                  onChange={(e) => setfComment(e.target.value)}
                  required
                />
              </div>
              <br />
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                  Ratings
                </h1>
                <Rating
                  name="no-value"
                  value={fRating}
                  onChange={(e) => setfRating(e.target.value)}
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
        </div>
      </div>
    </>
  );
};

export default Create;
