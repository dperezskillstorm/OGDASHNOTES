const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const StaffingSchema = new Schema({
  

    fiscalWeek:{
        type: String,
        required: false,
        unique:false
    },

    date:{
        type:String,
        required: false,
        unique: false
    },

    position:{
        type: String,
        required: false,
        unique:false
    },

    value:{
        type: Number,
        required: false,
        unique:false
    },

    firstName:{
        type: String,
        required: false,
        unique:false
    },

    lastName:{
        type: String,
        required: false,
        unique:false
    },

    notes:{
        type: String,
        required: false,
        unique:false
    },

    miscField:{
        type: String,
        required: false,
        unique:false
    },

})

const Staffing = mongoose.model("Staffing",StaffingSchema,"Staffing")
module.exports = Staffing