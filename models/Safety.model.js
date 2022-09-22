const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const SafetySchema = new Schema({
  

    fiscalWeek:{
        type: String,
        required: false,
        unique:false
    },

    publicLiability:{
        type: Number,
        required: false,
        unique:false
    },

    workersComp:{
        type: Number,
        required: false,
        unique:false
    },

    smartSenseCompletion:{
        type: Number,
        required: false,
        unique:false
    },

    compliancePercent:{
        type: Number,
        required: false,
        unique:false
    },

    tqScore:{
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

const Staffing = mongoose.model("Safety",SafetySchema,"Safety")
module.exports = Staffing