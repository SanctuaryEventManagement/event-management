import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import User from "../assets/user.png";

import logo from "../assets/logo.png";
import axios from "axios";

const MyAccount = () => {
  const history = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/api/auth/get")
        .then((res) => {
          setData(res?.data);
          console.log(res);
        })
        .catch((error) => alert(error));
    })();
  }, []);
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const filteredData = data.filter(
    (el) => el.email === localStorage.getItem("email") 
  );
  console.log(data);

  return (
    <>
      <React.Fragment>
        <CardContent className=" bg-neutral-800">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {localStorage.getItem("type") === "admin" ? (
              <div className=" text-right">
                <Button
                  variant="contained"
                  onClick={() => history("/adminhome")}
                >
                  Back
                </Button>
              </div>
            ) : (
              <div className=" text-right">
                <Button variant="contained" onClick={() => history("/home")}>
                  Back
                </Button>
              </div>
            )}
            <div className=" mx-96 translate-x-40">
              <img className="lg:w-80 w-80 max-w-fit" src={logo} />
            </div>
          </Typography>
          <hr />
        </CardContent>
      </React.Fragment>
      <center>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <CardMedia
                component="img"
                height="140"
                src={User}
                alt="green iguana"
                style={{ width: 200, height: 200 }}
              />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Username: {filteredData?.[0]?.username}
              </Typography>
              <Typography variant="h5" component="div">
                Email: {filteredData?.[0]?.email}
              </Typography>
              {localStorage.getItem("type") != "admin" ? (
                <>
                  <Typography variant="h5" component="div">
                    Contact Number: {filteredData?.[0]?.contact}
                  </Typography>
                  <Typography variant="h5" component="div">
                    Address: {filteredData?.[0]?.address}
                  </Typography>
                </>
              ) : (
                <></>
              )}
            </CardContent>
          </Card>;
      </center>
    </>
  );
};

export default MyAccount;
