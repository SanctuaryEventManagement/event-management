import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { NavLink, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";


const Edit = () => {
  const [pID, setPid] = useState("");
  const [pName, setPname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [demand, setDemand] = useState("high");
  const [loading, setLoading] = useState(false); //additional

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await fetch(`/logistics/get/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setPid(json.pID);
          setPname(json.pName);
          setQuantity(json.quantity);
          setUnitPrice(json.unitPrice);
          setDemand(json.demand);
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
        `/logistics/update/${id}`,
        {
          pID,
          pName,
          quantity,
          unitPrice,
          demand,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        alert("Success! Updated 😘");
        setPid("");
        setPname("");
        setQuantity("");
        setUnitPrice("");
        setDemand("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
      setPid("");
      setPname("");
      setQuantity("");
      setUnitPrice("");
      setDemand("");
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
              <NavLink to="/inventory">
                <Button variant="contained" color="primary">
                  Back
                </Button>
              </NavLink>
            </div>
          </div>
        </Box>
        <div className=" text-4xl text-center mt-10">
          Update Item <br />
        </div>
        <form onSubmit={editHandler}>
          <div class="container px-36 py-24 mx-auto  mt-4">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                P.ID
              </h1>
              <TextField
                id="outlined-basic"
                label="PID"
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
                variant="outlined"
                type="text"
                value={unitPrice}
                onChange={(e) => setUnitPrice(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-black">
                Demand
              </h1>
              <TextField
                id="outlined-basic"
                label="Demand"
                variant="outlined"
                type="text"
                value={demand}
                onChange={(e) => setDemand(e.target.value)}
              />
            </div>
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
