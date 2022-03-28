const assocAuth_router = require('express').Router()
const {
    assoc_signup
}= require('../controllers/auth/associationAuth')
const multer = require('multer')

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'images')   
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + "-" + file.originalname);
    }
})
const upload = multer({storage:storage})
assocAuth_router.post('/register',upload.single('image') ,assoc_signup)


module.exports = assocAuth_router