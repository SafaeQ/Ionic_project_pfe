const userAuth_router = require('express').Router()

const {assoc_signup, login, donor_signup, loginDonor }= require('../controllers/auth/userAuth.controller')



    userAuth_router.post('/register-association' ,assoc_signup)

    userAuth_router.post('/register-donor', donor_signup)

    userAuth_router.post('/login', login)

    userAuth_router.post('/login-donor', loginDonor)


module.exports = userAuth_router