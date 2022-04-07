const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config();
const db = require('./connection/db')
const cors = require('cors')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.static('images'));
// routes
const router = require('./routes/routes')
const assocAuth_router = require('./routes/userAuth.routes')

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