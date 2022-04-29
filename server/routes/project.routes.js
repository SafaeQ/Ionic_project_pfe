const projectRouter = require('express').Router()

const createProject = require('../controllers/project.controller')

const upload = require('../utils/uploadImage')


    projectRouter.post('/create-project', upload.array('image', 8), createProject)


module.exports = projectRouter