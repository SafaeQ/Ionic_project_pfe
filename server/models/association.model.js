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
        },
        role: {
            type: String,
            default: 'association'
        }
    })
)

module.exports = Association