const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const GSSStatsSchema = new Schema({
  

    fiscalWeek:{
        type: String,
        required: false,
        unique:false
    },

    overAll:{
        type: Number,
        required: false,
        unique:false
    },

    taste:{
        type: Number,
        required: false,
        unique:false
    },

    attentiveness:{
        type: Number,
        required: false,
        unique:false
    },

    onTime:{
        type: Number,
        required: false,
        unique:false
    },

    accuracy:{
        type: Number,
        required: false,
        unique:false
    },

    value:{
        type: Number,
        required: false,
        unique:false
    },

    rank:{
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

const GSSStats = mongoose.model("GSSStat",GSSStatsSchema,"Stats")
module.exports = GSSStats