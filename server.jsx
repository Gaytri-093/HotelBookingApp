const express = require("express");

const app = express();
const dbConfig = require("./db");
const roomsRoute = require("./routes/roomsRoute.js");
app.use(express.json());
app.use("/api/rooms",roomsRoute)

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`) )