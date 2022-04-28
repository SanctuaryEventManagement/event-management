import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("dept");
    localStorage.removeItem("type");
    localStorage.removeItem("authToken");
    localStorage.removeItem("contact");
    localStorage.removeItem("address");
    history("/");
    window.location.reload();
  };

  return (
    <div>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <div className="  flex justify-center pr-8 mx-auto">
          <div className="-translate-x-96 mr-1 mx-auto">
            <Button variant="contained">Registered Vistors Details</Button>
          </div>
          <div className=" translate-x-96 ml-8 mx-auto">
            <Button variant="contained" onClick={() => history("/account")}>
              My Account
            </Button>
          </div>
        </div>
        <div className=" mx-96">
          <img className="lg:w-80 w-80 m:w-80" src={logo} />
        </div>
      </Typography>
      <hr />
      <Typography variant="body2">
        <div className=" pl-14  flex pt-4 ">
          <div className=" px-2">
            <Button variant="contained" color="success">
              Logistics Management
            </Button>
          </div>
          <div className=" px-2">
            <Button variant="contained" color="success">
              Sales Management
            </Button>
          </div>
          <div className=" px-2">
            <Button variant="contained" color="success">
              Employee management
            </Button>
          </div>
          <div onClick={() => history("/event")}>
            <div className=" px-2">
              <Button variant="contained" color="success">
                Event Mnagement
              </Button>
            </div>
          </div>
          <div className=" px-2">
            <NavLink to="/fview">
              <Button variant="contained" color="success">
                Feedback Management
              </Button>
            </NavLink>
          </div>
          <div className=" px-2 ml-48">
            <Button variant="contained" color="success" onClick={logoutHandler}>
              Logout
            </Button>
          </div>
        </div>
      </Typography>
      <br />
    </div>
  );
};

export default Header;
