const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Bunglow = new Schema({
    refNo: {
        type:String,
    },
    bunglowPlace: {
        type: String,
    },
    bPrice: {
        type: Number,
    },
    bPplcount: {
        type: Number,
    },
    bPackage: {
        type: String,
    },
});

const newBunglow = mongoose.model("bunglow", Bunglow); //create database collection

module.exports = newBunglow;