const userAuth_router = require('express').Router()

const { assoc_signup }= require('../controllers/auth/userAuth.controller')

const {uploads} = require('../utils/uploadImage')



    userAuth_router.post('/register',uploads ,assoc_signup)


module.exports = userAuth_router