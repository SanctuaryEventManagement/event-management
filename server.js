const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
   
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection was successful");
})

const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`)
})

app.use("/logistics", require("./BACKEND/routes/logistics"));
app.use("/feedback", require("./BACKEND/routes/feedback"));
app.use("/event", require("./BACKEND/routes/event"));
app.use("/safari", require("./BACKEND/routes/safarijeep"));

//login and register
app.use("/api/auth", require("./BACKEND/routes/auth"));