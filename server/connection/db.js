const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

async function db (){
    await mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,useUnifiedTopology:true }, err =>{
    console.log(' 😊 WooW connected');
})
}

module.exports = db;
