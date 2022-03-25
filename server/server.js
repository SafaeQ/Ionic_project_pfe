const express = require('express')
const app = express()
const port = 9900

// routes
const router = require('./routes/routes')

app.use('/', router)


app.listen(port,()=>{
    console.log(` 🐱The server is runnig`);
})