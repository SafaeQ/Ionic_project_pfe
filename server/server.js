const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const db = require('./connection/db')

// routes
const router = require('./routes/routes')

app.use('/', router)


app.listen(process.env.PORT,()=>{
    console.log(` 🐱The server is runnig`);
})