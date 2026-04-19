const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Add cors middleware to prevent fetch errors from localhost React
app.use(cors());

mongoose.connect("mongodb://localhost:27017/grocery");

app.use(express.json());

app.get("/products", (req,res)=>{
    res.json([
        {name:"Rice",price:50},
        {name:"Milk",price:30},
        {name:"Vegetables",price:40}
    ])
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});
