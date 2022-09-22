const Harvest = require("../models/Harvest.model")



const createRecord = async ({_id,AVst,fiscalWeek,topItem1, topItem2, topItem3, harvestedInput, date ,category}) => {
    try{
        const record = new Harvest({
            _id,
            AVst,
            fiscalWeek,
            topItem1,
            topItem2,
            topItem3,
            harvestedInput,
            date,
            category
        });

        await record.save() //saves states into database
        return record._id
}
catch(err){
    console.error(err);
    throw{status: 400, message: err};
}

}

//Find all Records
const findAllRecords = async (limit =0) => {
    const record = await Harvest.find();
    return record
}

//Find Record by ID
const findAllRecordById = async _id =>{
    try {
        const record = await Harvest.findById({_id});
        if(Harvest === null){
            throw `no record with id: ${_id} was found`;
        }
        return record;
    } catch (error) {
        console.log(error);
        throw {status: 404, message:`no record with id: ${_id} was found` }
        
    }
}

//Delete Record by Id
//http://localhost:8080/stats/63221d9cf1d706f141092c65
const DeleteRecordById = async _id =>{
    try {
        const record = await Harvest.findById({_id});
        if(Harvest === null){
        }
        return record.remove();

        
        
        
    } catch (error) {
        console.log(error);
        throw {status: 404, message:`no record with id: ${_id} was found` }
        
    }
}

const updateRecord = async({_id,AVst,fiscalWeek,topItem1, topItem2, topItem3, harvestedInput, date, category})=>{
    try {
        const updates={_id,AVst,fiscalWeek,topItem1, topItem2, topItem3, harvestedInput, date, category};
        const updatedRecord = await Harvest.findByIdAndUpdate({_id}, updates,{new:true});
        return updatedRecord

        np
    } catch (err) {
        console.log(err);
        throw  {status: 404, message:`no record with id: ${_id} was found` }
        
    }
}






module.exports = {createRecord, findAllRecords, findAllRecordById, DeleteRecordById, updateRecord}