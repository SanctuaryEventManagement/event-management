import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { NavLink, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const Edit = () => {
  const [bunglowPlace, setBunglowPlace] = useState("");
  const [bPrice, setBPrice] = useState("");
  const [bPplcount, setBPplcount] = useState("");
  const [bPackage, setBPackage] = useState("");
  const [loading, setLoading] = useState(false); //additional

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await fetch(`/bunglow/get/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setBunglowPlace(json.bunglowPlace);
          setBPrice(json.bPrice);
          setBPplcount(json.bPplcount);
          setBPackage(json.bPackage);
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
        `/bunglow/update/${id}`,
        {
          bunglowPlace,
          bPrice,
          bPplcount,
          bPackage,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        alert("Success! Updated 😘");
        setBunglowPlace("");
        setBPrice("");
        setBPplcount("");
        setBPackage("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
      setBunglowPlace("");
      setBPrice("");
      setBPplcount("");
      setBPackage("");
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
              <NavLink to="/bunglowdisplay">
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
                value={bunglowPlace}
                onChange={(e) => setBunglowPlace(e.target.value)}
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
                value={bPrice}
                onChange={(e) => setBPrice(e.target.value)}
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
                value={bPplcount}
                onChange={(e) => setBPplcount(e.target.value)}
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
                value={bPackage}
                onChange={(e) => setBPackage(e.target.value)}
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
