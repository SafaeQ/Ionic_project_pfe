const userAuth_router = require('express').Router()

const {assoc_signup, login, donor_signup, loginDonor }= require('../controllers/auth/userAuth.controller')

const upload = require('../utils/uploadImage')



    userAuth_router.post('/register-association',upload.single('image') ,assoc_signup)

    userAuth_router.post('/register-donor', donor_signup)

    userAuth_router.post('/login', login)

    userAuth_router.post('/login-donor', loginDonor)


module.exports = userAuth_router