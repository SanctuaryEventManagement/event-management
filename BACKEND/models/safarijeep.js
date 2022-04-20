const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Safari = new Schema({
    sPrice: {
        type: Number,
    },
    sPplCount: {
        type: Number,
    },
});

const newSafari = mongoose.model("safari", Safari); //create database collection

module.exports = newSafari;