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
        image:{
            data: Buffer,
            type: Array
        }, 
        description:{
            type:String,
            required:true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        adress: {
            type: String,
            required: true
        },
        members: {
            type: Number,
            default: 0
        }
    })
)

module.exports = Association