import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Viewfeedback = () => {
  const [fReply, setfReply] = useState("");

  const { id } = useParams();

  const [data, setData] = useState([]);

  const navigate = useNavigate()

  const Reply = async () => {
    await axios
      .put(`/feedback/reply/${id}`, { fReply })
      .then(() => alert("Successfully Replied!"))
      .catch((error) => alert(error));
      navigate("/fview")
  };

  useEffect(() => {
    (async () => {
      await axios
        .get(`/feedback/get/${id}`)
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();
  }, []);

  const deletefb = async (id) => {
    await axios
      .delete(`/feedback/delete/${id}`)
      .then(() => alert("Successfully Deleted!"))
      .catch((error) => alert(error));
      navigate("/fview")
  };
  return (
    <div className="body">
      <center>
        <br />
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://i.ibb.co/nzg2pRX/today.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <span style={{ color: "orange", fontSize: "15px" }}>
                {data.fName}
              </span>
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              <span style={{ color: "orange", fontSize: "15px" }}>
                Comment: {data.fComment}
              </span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span style={{ color: "orange", fontSize: "15px" }}>
                Rating: {data.fRating}
              </span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div style={{ color: "orange", fontSize: "15px" }}>
                <form onSubmit={Reply}>
                  <input
                    className="bg-gray-300"
                    type="text"
                    placeholder="enter response"
                    value={fReply}
                    onChange={(e) => setfReply(e.target.value)}
                    required
                  />
                  <input className="text-white bg-green-600 mr-2" type="submit" value={"Reply"} />
                </form>
              </div>
            </Typography>
            <i
              className="fa fa-trash"
              aria-hidden="true"
              style={{
                color: "red",
                fontSize: "20px",
                marginRight: "20px",
              }}
              onClick={() => deletefb(id)}
            ></i>{" "}
            <Link to={`/fedit/${id}`}>
              <i
                className="fa fa-pencil"
                aria-hidden="true"
                style={{ color: "green", fontSize: "20px" }}
              ></i>
            </Link>
            <br />
          </CardContent>
        </Card>
        <br />
        <br />
        <br />

      </center>
    </div>
  );
};

export default Viewfeedback;
