import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { NavLink, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const Edit = () => {
  const [eventPlace, setEventPlace] = useState("");
  const [ePrice, setEPrice] = useState("");
  const [ePplcount, setEPplcount] = useState("");
  const [ePackage, setEPackage] = useState("");
  const [loading, setLoading] = useState(false); //additional

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await fetch(`/event/get/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setEventPlace(json.eventPlace);
          setEPrice(json.ePrice);
          setEPplcount(json.ePplcount);
          setEPackage(json.ePackage);
        })
        .catch((err) => alert(err));
    };
    getData();
  }, []);

  const editHandler = async (e) => {
    // create handler for saving data to the db
    e.preventDefault();

    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/event/update/${id}`,
        {
          eventPlace,
          ePrice,
          ePplcount,
          ePackage,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        alert("Success! Updated 😘");
        setEventPlace("");
        setEPrice("");
        setEPplcount("");
        setEPackage("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
      setEventPlace("");
      setEPrice("");
      setEPplcount("");
      setEPackage("");
      setLoading(false);
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
              <NavLink to="/eventdisplay">
                <Button variant="contained" color="primary">
                  Back
                </Button>
              </NavLink>
            </div>
          </div>
        </Box>
        <div className=" text-4xl text-center mt-10">
          Update Event <br />
        </div>
        <form onSubmit={editHandler}>
          <div class="container px-36 py-24 mx-auto  mt-4">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
              Event Name
              </h1>
              <TextField
                id="outlined-basic"
                label="Event Name"
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
                variant="outlined"
                type="text"
                value={ePackage}
                onChange={(e) => setEPackage(e.target.value)}
                required
              />
            </div>
            <br />
          </div>
          <div className=" text-center mx-auto">
            <div className=" -translate-y-10">
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={loading}
              >
                <h6 style={{ marginLeft: "5px" }}> </h6>{" "}
                {loading ? "Updating..." : "Update"}
              </Button>
            </div>
          </div>
        </form>
        <br />
        <br />
      </div>
    </>
  );
};

export default Edit;
