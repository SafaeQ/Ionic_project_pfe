const assocAuth_router = require('express').Router()
const {
    assoc_signup
}= require('../controllers/auth/associationAuth')
const {uploads} = require('../utils/uploadImage')

assocAuth_router.post('/register',uploads ,assoc_signup)


module.exports = assocAuth_router