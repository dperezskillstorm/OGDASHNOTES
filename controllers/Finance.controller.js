const Finance = require("../models/Finance.model")



const createRecord = async ({_id,fiscalWeek,sales,salesPer,guestCount,guestCountLY,growthPE,addOns,driverCheck,tabcCheck,dardenDimes, day90Term}) => {
    try{
        const record = new Finance({
            _id,fiscalWeek,sales,salesPer,guestCount,guestCountLY,growthPE,addOns,driverCheck,tabcCheck,dardenDimes,day90Term
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
    const record = await Finance.find();
    return record
}

//Find Record by ID
const findAllRecordById = async _id =>{
    try {
        const record = await Finance.findById({_id});
        if(Finance === null){
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
        const record = await Finance.findById({_id});
        if(Finance === null){
        }
        return record.remove();

        
        
        
    } catch (error) {
        console.log(error);
        throw {status: 404, message:`no record with id: ${_id} was found` }
        
    }
}

const updateRecord = async({_id,fiscalWeek,sales,salesPer,guestCount,guestCountLY,growthPE,addOns,driverCheck,tabcCheck,dardenDimes,day90Term})=>{
    try {
        const updates={_id,fiscalWeek,sales,salesPer,guestCount,guestCountLY,growthPE,addOns,driverCheck,tabcCheck,dardenDimes,day90Term};
        const updatedRecord = await Finance.findByIdAndUpdate({_id}, updates,{new:true});
        return updatedRecord

        np
    } catch (err) {
        console.log(err);
        throw  {status: 404, message:`no record with id: ${_id} was found` }
        
    }
}






module.exports = {createRecord, findAllRecords, findAllRecordById, DeleteRecordById, updateRecord}