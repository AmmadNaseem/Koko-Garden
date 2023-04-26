const dotenv = require('dotenv');
dotenv.config();
const { dbConnect } = require('./configs/database.config');
const express = require('express');
const schoolRouter=require('./routes/schoolRoute')
const treesRouter=require('./routes/treesRoute')
const cors = require("cors");


// Your authorization middleware code here

// Connect to the MongoDB database
dbConnect();

// Create our express app
const app = express();

// Handle cors + middleware 
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'auth-token, Origin, X-requested-With, Content-Type, Accept');
  next();
});

// Use built-in express middleware instead of body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//===========ROUTES==
app.get("/",(req,res)=> {
    res.send("Koko Garden successfully run.")
})

app.use("/api",schoolRouter);
app.use("/api",treesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

