const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const LaborHoursSchema = new Schema({
  

    fiscalWeek:{
        type: String,
        required: false,
        unique:false
    },

    culinary:{
        type: Number,
        required: false,
        unique:false
    },

    service:{
        type: Number,
        required: false,
        unique:false
    },

    togo:{
        type: Number,
        required: false,
        unique:false
    },

    host:{
        type: Number,
        required: false,
        unique:false
    },

    bartender:{
        type: Number,
        required: false,
        unique:false
    },

    category:{
        type: String,
        required: false,
        unique:false
    },

})

const LaborHours = mongoose.model("LaborHours",LaborHoursSchema,"LaborHours")
module.exports = LaborHours