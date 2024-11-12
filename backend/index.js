const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());

app.use(cors());

//Database connection with Mongodb
mongoose.connect("mongodb+srv://sheelahmogaka:mUxm1LbECShwRJKX@cluster0.kgiwl.mongodb.net/ShopSmart")

//API creation
app.get("/", (req, res)=>{
    res.send("Express app is runninng" +port)

});



app.listen(port, (error) =>{
    if(!error) {
        console.log("Server running on port"+port)

    }
    else{
        ContentVisibilityAutoStateChangeEvent.log("Error : " +error)
    }
})

//Storage engine for image

const storage = multer.diskStorage({
    destination: '.upload'
})