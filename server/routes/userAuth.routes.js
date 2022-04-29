const userAuth_router = require('express').Router()

const {assoc_signup, login, donor_signup }= require('../controllers/auth/userAuth.controller')

const upload = require('../utils/uploadImage')



    userAuth_router.post('/register-association',upload.array('images', 8) ,assoc_signup)

    userAuth_router.post('/register-donor', donor_signup)

    userAuth_router.post('/login', login)


module.exports = userAuth_router