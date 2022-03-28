const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config();
const db = require('./connection/db')


app.use(bodyParser.json());

// routes
const router = require('./routes/routes')
const assocAuth_router = require('./routes/association.routes')

app.use('/', router)
app.use('/api', assocAuth_router)

db()
    .catch((err)=>{
        throw err
    })
    .then(()=>{
        app.listen(9900,()=>{
            console.log(` 🐱The server is runnig`);
        })
    })