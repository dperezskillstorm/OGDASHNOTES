const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require('dotenv').config()
const app = express();

let corsOptions = {
    origin: "http://localhost:3000"
};

const PORT = process.env.PORT ||8080;

app.use(cors(corsOptions));

// parse request of content type appliaction/json
app.use(bodyParser.json());

//parse request of content type application/xwww form urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//Different Cors Method
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//simple route
app.get("/", (req,res)=>{
    res.json({message: "welcome to OG DASHOBARD"});
});

app.post('/', function(req, res) {
    // console.log(req);
    console.log(req.body);
    res.send(req.body);
    }); 


//This bind router ojeect to url/ 
app.use('/GSS', require("./routes/Stats.route"))
app.use('/LaborHours', require("./routes/LaborHours.route"))
app.use('/Notes',require("./routes/Notes.route"))
app.use('/Staffing',require("./routes/Staffing.route"))
app.use('/Safety',require("./routes/Safety.route"))
app.use('/Harvest',require("./routes/Harvest.route"))


app.all("*",(res,req)=> {
    res.statusCode(404).send("we do not have the source you are looking for")
})





//Connect to Mongo
mongoose.connect(process.env.MONGO_URI,
{useNewUrlParser:true})
    .then( () => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => {
        console.error(err);
        // Options
        // Connect to fallback database
        // OR
        // Terminate process
        process.exit(1);
    });

//set port, listen for reuiest

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}.`);
});





