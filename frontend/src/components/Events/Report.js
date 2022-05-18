import React, { Component } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import "./Report.css";

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReportData: [],
    };
  }

  printDocument() {
    const input = document.getElementById("pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(255, 0, 0);
      doc.setFontSize(28);
      doc.text(85, 10, "Sanctuary");
      doc.setTextColor(0, 0, 255);
      doc.setFontSize(16);
      doc.text(10, 70, "Event Management");
      doc.setTextColor(0, 255, 0);
      doc.setFontSize(12);
      doc.text(145, 85, "Signature :");
      //Date
      var m_names = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      );

      var today = new Date();
      var seconds = today.getSeconds();
      var minutes = today.getMinutes();
      var hours = today.getHours();
      var curr_date = today.getDate();
      var curr_month = today.getMonth();
      var curr_year = today.getFullYear();

      today =
        m_names[curr_month] +
        " " +
        curr_date +
        "/ " +
        curr_year +
        " | " +
        hours +
        "h : " +
        minutes +
        "min : " +
        seconds +
        "sec";
      var newdat = today;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(130, 93, newdat);
      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
      const date = Date().split(" ");
      // we use a date string to generate our filename.
      const dateStr =
        "EventManagement_" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  }

  componentDidMount() {
    axios.get("/event").then((response) => {
      console.log(response?.data);
      this.setState({
        ReportData: response?.data,
      });
    });
  }

  render() {
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
                <Link to="/eventdisplay">
                  <Button variant="contained" color="primary">
                    Back
                  </Button>
                </Link>
              </div>
              <div>
                <h1 className=" ml-44 text-5xl text-lime-500 font-semibold">
                  -Report-
                </h1>
              </div>
            </div>
          </Box>
        </div>
        <div>
          <TableContainer
            id="pdfdiv"
            className="txt px-4 mt-5"
            component={Paper}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Event Reference Number</TableCell>
                  <TableCell align="right">Event Name</TableCell>
                  <TableCell align="right">Event Price</TableCell>
                  <TableCell align="right">Event Hall No</TableCell>
                  <TableCell align="right">Package Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state?.ReportData?.map((p, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align="left" className="-translate-x-2">
                        {"E_Ref" +
                          Math.random().toString().substring(0, 10) * 100000000}
                      </TableCell>
                      <TableCell align="right">{p.eventPlace}</TableCell>
                      <TableCell align="right">{p.ePrice}</TableCell>
                      <TableCell align="right">{p.ePplcount}</TableCell>
                      <TableCell align="right">{p.ePackage}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>{" "}
          <br />
          <br />
          <center>
            <div>
              <button
                className="info__button"
                onClick={this.printDocument}
                variant="contained"
                color="primary"
              >
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF
              </button>
              <br />
            </div>
          </center>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <br />
            <span style={{ color: "black" }}>{"Copyright © "}</span>
            <span style={{ color: "lightcoral" }}>Sanctuary</span>
            <span style={{ color: "black" }}>
              {" " + new Date().getFullYear() + " . "}
            </span>
          </center>
        </div>
      </>
    );
  }
}
