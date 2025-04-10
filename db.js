const mongoose = require("mongoose");

var mongo_URL = `mongodb://localhost:27017/Mern-Rooms`

mongoose.connect(mongo_URL ,{useUnifiedTopology:true, useNewUrlParser:true})

var connection = mongoose.connection
connection.on("error",()=>{
    console.log("mongodb connection failed")
})
connection.on("connected",()=>{
    console.log("database connected successfully")
})

module.exports = mongoose