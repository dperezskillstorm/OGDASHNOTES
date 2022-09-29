const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const winston = require("winston")
require('dotenv').config()

const app = express();


const PORT = process.env.PORT ||8080;

app.use(cors());

// parse request of content type appliaction/json
app.use(bodyParser.json());

//parse request of content type application/xwww form urlencoded
app.use(bodyParser.urlencoded({extended:true}));



//Different Cors Method
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
    )
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
      )
      return res.status(200).json({})
    }
    next()
  })

  //create a logger
  const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
        format:winston.format.combine(
            winston.format.colorize({all:true})
        )
    }),
    new winston.transports.File({filename: 'error.log',level:'error'})
  ],
  exceptionHandlers: [
    new winston.transports.File({filename: 'exceptions.log'})
  ]

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

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

//This bind router ojeect to url/ 
app.use('/GSS', require("./routes/Stats.route"))
app.use('/LaborHours', require("./routes/LaborHours.route"))
app.use('/Notes',require("./routes/Notes.route"))
app.use('/Staffing',require("./routes/Staffing.route"))
app.use('/Safety',require("./routes/Safety.route"))
app.use('/Harvest',require("./routes/Harvest.route"))
app.use('/Finance',require("./routes/Finance.route"))


app.all("*",(res,req)=> {
    res.statusCode(404).send("we do not have the source you are looking for")
})




//Connect to Mongo
mongoose.connect(process.env.MONGO_URI,
{useNewUrlParser:true})
    .then( () => {
        logger.log("info","connected to MongoDB");
    })
    .catch(err => {
        logger.error(err.message);
        // Options
        // Connect to fallback database
        // OR
        // Terminate process
        process.exit(1);
    });

//set port, listen for reuiest

app.listen(PORT, ()=>{
    logger.warn( `server is running on port ${PORT}.`);
});





