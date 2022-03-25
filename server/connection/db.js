const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,useUnifiedTopology:true }, err =>{
    console.log(' 😊 WooW connected');
})