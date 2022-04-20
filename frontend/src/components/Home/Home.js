import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";
import img7 from "../../assets/gallery/img7.jpg";
import logo from "../../assets/logo.png";

import feedback from "../../assets/feedback/feedback.jpg";
import Utils from "../../utils/utils.json";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const card = (
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
    <div className=" text-center mt-10 ">
      <Box sx={{ px: 20, py: 4, color: "red", border: "2px dashed grey" }}>
        <h1 className=" text-5xl text-lime-500 font-semibold">
          Welcome to nature's paradise - NATUREHOLIC
        </h1>
      </Box>

      <div>
        <section class="text-gray-600 body-font overflow-hidde">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-full mx-auto flex flex-wrap shadow-2xl  border border-green-600">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-96 h-64 object-cover object-center rounded"
                src={img1}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-2xl title-font font-medium mb-1">
                  Image Description
                </h1>
                <p class="leading-relaxed pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas posuere dictum fermentum. Curabitur efficitur justo
                  sed lectus placerat vestibulum. Sed viverra ex faucibus purus
                  maximus cursus. Mauris sit amet ornare arcu. Suspendisse vitae
                  tincidunt ante. Cras condimentum interdum sollicitudin. Ut ac
                  sem ut lectus lacinia accumsan. Curabitur vel venenatis
                  libero. Fusce volutpat ligula a nibh malesuada, sed luctus
                  nunc egestas. Nullam ultricies eleifend ipsum sed viverra.
                  Nulla semper est sed quam aliquam tempor. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Maecenas dignissim diam
                  dolor, eget blandit arcu sagittis non. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Box
        sx={{
          px: 20,
          py: 4,
          color: "red",
          border: 1,
          borderColor: "primary.main",
        }}
      >
        <h1 className=" text-5xl text-lime-500 font-semibold">
          -Attractions and Promotions-
        </h1>
      </Box>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap md:-m-2 -m-1 shadow-2xl">
              <div class="flex flex-wrap w-1/2">
                <div
                  class="md:p-2 p-1 w-1/2 border-4 cursor-pointer"
                  data-aos="zoom-in"
                >
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={img2}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2 border-4" data-aos="zoom-in">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={img3}
                  />
                </div>
                <div class="md:p-2 p-1 w-full border-4" data-aos="fade-right">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src={img4}
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-full border-4" data-aos="fade-left">
                  <img
                    alt="gallery"
                    class="w-full h-full object-cover object-center block"
                    src={img5}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2 border-4" data-aos="zoom-in">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={img6}
                  />
                </div>
                <div class="md:p-2 p-1 w-1/2 border-4" data-aos="zoom-in">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block"
                    src={img7}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Box
        sx={{
          px: 20,
          py: 4,
          color: "red",
          border: 1,
          borderColor: "primary.main",
        }}
      >
        <h1 className=" text-5xl text-lime-500 font-semibold">
          -Feedbacks & Site Map-
        </h1>
      </Box>
      <div data-aos="zoom-in">
        <section class="text-gray-600 body-font overflow-hidde">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-full mx-auto flex flex-wrap shadow-2xl  border border-green-600">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-96 h-64 object-cover object-center rounded pl-6 pt-6"
                src={feedback}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-2xl title-font font-medium mb-1">
                  Feedbacks from our visitors <hr />
                </h1>
                <div className="p-2" data-aos="fade-left">
                  <div className="pb-4 pt-2">
                    <Box
                      className="rounded-3xl"
                      sx={{
                        width: 425,
                        height: 75,
                        backgroundColor: "#b2dfdb",
                        color: "#000",
                        "&:hover": {
                          backgroundColor: "#00796b",
                          color: "#fff",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      <p>{Utils.f1.fName}</p>
                      <p>{Utils.f1.fComment}</p>
                      <p>{Utils.f1.fRating}</p>
                    </Box>
                  </div>
                  <div className="pb-4">
                    <Box
                      className="rounded-3xl"
                      sx={{
                        width: 425,
                        height: 75,
                        backgroundColor: "#b2dfdb",
                        color: "#000",
                        "&:hover": {
                          backgroundColor: "#00796b",
                          color: "#fff",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      <p>{Utils.f2.fName}</p>
                      <p>{Utils.f2.fComment}</p>
                      <p>{Utils.f2.fRating}</p>
                    </Box>
                  </div>
                  <div className="pb-4">
                    <Box
                      className="rounded-3xl"
                      sx={{
                        width: 425,
                        height: 75,
                        backgroundColor: "#b2dfdb",
                        color: "#000",
                        "&:hover": {
                          backgroundColor: "#00796b",
                          color: "#fff",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      <p>{Utils.f3.fName}</p>
                      <p>{Utils.f3.fComment}</p>
                      <p>{Utils.f3.fRating}</p>
                    </Box>
                  </div>
                </div>
                <div className="flex">
                <div className="">
                    <NavLink to="/frview">
                      <Button variant="contained" color="primary">
                        View Replies
                      </Button>
                    </NavLink>
                  </div>
                  <div className=" ml-40">
                    <NavLink to="/fcreate">
                      <Button variant="contained" color="success">
                        Add FeedBack
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
);

export default function Home() {
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  );
}
