const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const FinanceSchema = new Schema({
  

    fiscalWeek:{
        type: String,
        required: false,
        unique:false
    },

    sales:{
        type: Number,
        required: false,
        unique:false
    },

    salesPer:{
        type: Number,
        required: false,
        unique:false
    },

    guestCount:{
        type: Number,
        required: false,
        unique:false
    },

    guestCountLY:{
        type: Number,
        required: false,
        unique:false
    },

    growthPE:{
        type: Number,
        required: false,
        unique:false
    },

    addOns:{
        type: Number,
        required: false,
        unique:false
    },

    driverCheck:{
        type: String,
        required: false,
        unique:false
    },

    tabcCheck:{
        type: String,
        required: false,
        unique:false
    },

    dardenDimes:{
        type: String,
        required: false,
        unique:false
    },

     day90Term:{
        type: Number,
        required: false,
        unique:false
    },

})

const Finance = mongoose.model("Finance",FinanceSchema,"Finances")
module.exports = Finance