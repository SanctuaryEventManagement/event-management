const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema({
    refNo: {
        type:String,
    },
    eventPlace: {
        type: String,
    },
    ePrice: {
        type: Number,
    },
    ePplcount: {
        type: Number,
    },
    ePackage: {
        type: String,
    },
});

const newEvent = mongoose.model("event", Event); //create database collection

module.exports = newEvent;