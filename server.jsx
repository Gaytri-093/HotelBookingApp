const express = require("express");

const app = express();
const dbConfig = require("./db")
const PORT = process.env.PORT || 4000

app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`) )