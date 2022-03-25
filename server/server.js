const express = require('express')
const app = express()
const port = 9900
app.use('/', ()=>{
    return 'hello world'
})

app.listen(port,()=>{
    console.log(` 🐱‍👤The server is runnig`);
})