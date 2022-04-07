const userAuth_router = require('express').Router()

const {assoc_signup, login, donor_signup }= require('../controllers/auth/userAuth.controller')

const {uploads} = require('../utils/uploadImage')



    userAuth_router.post('/register-association',uploads ,assoc_signup)

    userAuth_router.post('/register-donor', donor_signup)

    userAuth_router.post('/login', login)


module.exports = userAuth_router