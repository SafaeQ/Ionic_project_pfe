const mongoose = require('mongoose')

const Association = mongoose.model(
    'Association',
    new mongoose.Schema({
        fullName: {
            type:String,
            required: true,
        },
        email: {
            type:String,
            required:true,
            unique: true
        },
        password: {
            type:String,
            required:true
        },
        confirmPassword:{
            type:String,
        },
        image:{
            data: Buffer,
            type: Array
        }, 
        description:{
            type:String,
            required:true
        },
    })
)

module.exports = Association