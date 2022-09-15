const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
  

    fiscalWeek:{
        type: String,
        required: false,
        unique:false
    },

    status:{
        type: String,
        required: false,
        unique:false
    },

    department:{
        type: String,
        required: false,
        unique:false
    },

    description:{
        type: String,
        required: false,
        unique:false
    },

    notes:{
        type: String,
        required: false,
        unique:false
    },

   
})

const Notes = mongoose.model("Notes",NotesSchema,"Notes")
module.exports = Notes