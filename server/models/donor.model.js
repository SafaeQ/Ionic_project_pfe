const mongoose = require('mongoose')

const Donor = mongoose.model(
    'Donor',
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
        role: {
            type: String,
            default: 'donor'
        }
    })
)

module.exports = Donor