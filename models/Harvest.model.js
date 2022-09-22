const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const HarvestSchema = new Schema({
  

    fiscalWeek:{
        type: String,
        required: false,
        unique:false
    },

    AVst:{
        type: String,
        required: false,
        unique:false
    },

    topItem1:{
        type: String,
        required: false,
        unique:false
    },

    topItem2:{
        type: String,
        required: false,
        unique:false
    },

    topItem3:{
        type: String,
        required: false,
        unique:false
    },

    harvestedInput:{
        type: Number,
        required: false,
        unique:false
    },

    date:{
        type: String,
        required: false,
        unique:false
    },


    category:{
        type: String,
        required: false,
        unique:false
    },

})

const Harvest = mongoose.model("Harvest",HarvestSchema,"Harvest")
module.exports = Harvest