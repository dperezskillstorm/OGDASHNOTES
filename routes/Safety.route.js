
const router = require('express').Router();

const { findAllRecords, createRecord, findAllRecordById, DeleteRecordById, updateRecord} = require('../controllers/Safety.controller');
const { updateMany, findByIdAndDelete } = require('../models/Safety.model');

//Created Labor Hours Records
router.post('/', async (req, res)=>{
    try {
        const recordId = await createRecord(req.body);
        res.status(201).json({_id: recordId})
    } catch (err) {
        res.status(err?.status || 500).json(err);
        
    }
})

//Find All Records
router.get('/' , async (req,res) => {
    const records = await findAllRecords();
    res.json(records)
    console.log(records)
   
})

//Find Record by Id in url path
// http://localhost:8080/LaborHours/632216b74e67471bc30888d8
router.get('/:id', async (req,res)=>{
    try{
        const record = await findAllRecordById(req.params.id);
        res.json(record);
    }
    catch(err){
        res.status(err?.status||400).json(err);
    }
})


//Find Record by Id and delete
// http://localhost:8080/LaborHours/632216b74e67471bc30888d8
router.delete('/:id', async (req,res)=>{
    try{
        const record = await DeleteRecordById(req.params.id);
        res.json(record);
    }
    catch(err){
        res.status(err?.status||400).json(err);
    }
})

//Find record by Id and update
router.patch('/:id', async (req, res) => {
    try {
        const updatedRecord = await updateRecord(req.body);
        res.status(201).json({ updatedRecord });
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

module.exports = router;