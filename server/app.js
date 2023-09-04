const express=require("express");
const connectDB = require("./database");
const app=express();

connectDB();




app.listen(2500,()=>console.log(`Server is running on port 2500...`));