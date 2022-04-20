import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import img2 from "../../assets/img2.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent className=" bg-white">
              <div>
                <section class="text-gray-600 body-font overflow-hidde">
                  <div class="container px-10 py-24 mx-auto">
                    <div class="lg:w-full mx-auto flex flex-wrap shadow-2xl  border border-green-600">
                      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6  lg:mt-6">
                        <div
                          class="p-4 lg:w-3/4 cursor-pointer bg-red-600"
                          data-aos="fade-right"
                        >
                          <div onClick={() => navigate("/inventory")}>
                            <div class=" bg-gray-100 bg-opacity-75 px-8 pt-2 pb-16 rounded-lg overflow-hidden text-center relative">
                              <h1 class="title-font top-4 sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                <div className="translate-y-8">
                                  Warehouse Management
                                </div>
                              </h1>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div
                          class="p-4 lg:w-3/4 cursor-pointer bg-lime-500"
                          data-aos="fade-right"
                        >
                          <div class=" bg-gray-100 bg-opacity-75 px-8 pt-2 pb-16 rounded-lg overflow-hidden text-center relative">
                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                              <div className="translate-y-6">
                                Bungalow Stocks Management
                              </div>
                            </h1>
                          </div>
                        </div>
                        <br />
                        <div
                          class="p-4 lg:w-3/4 cursor-pointer bg-sky-600"
                          data-aos="fade-right"
                        >
                          <div class=" bg-gray-100 bg-opacity-75 px-8 pt-2 pb-16 rounded-lg overflow-hidden text-center relative">
                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                              <div className="translate-y-8">
                                Financial Handling
                              </div>
                            </h1>
                          </div>
                        </div>
                      </div>
                      <img
                        data-aos="zoom-in"
                        alt="ecommerce"
                        class="lg:w-1/2 w-full lg:h-screen h-screen object-cover object-center rounded"
                        src={img2}
                      />
                    </div>
                  </div>
                </section>
              </div>
            </CardContent>
          </React.Fragment>
        </Card>
      </Box>
    </>
  );
}
