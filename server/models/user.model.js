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
        resetPassword:{
            type:String,
        },
        image:{
            data: Buffer,
            contentType: String
        }, 
        description:{
            type:String,
            required:true
        },
    })
)

module.exports = Association