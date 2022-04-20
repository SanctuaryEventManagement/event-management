const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Logistics = new Schema({
  pID: {
    type: String,
  },
  pName: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  unitPrice: {
    type: Number,
  },
  demand: {
    type: String,
  },
});

const newLogistics = mongoose.model("logistics", Logistics); //create database collection

module.exports = newLogistics;
