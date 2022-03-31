const assocAuth_router = require('express').Router()
const {
    assoc_signup
}= require('../controllers/auth/associationAuth')
const upload = require('../utils/uploadImage')

assocAuth_router.post('/register',upload.array('image', 2) ,assoc_signup)


module.exports = assocAuth_router