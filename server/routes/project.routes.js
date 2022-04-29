const projectRouter = require('express').Router()

const {createProject, getAllProject} = require('../controllers/project.controller')

const upload = require('../utils/uploadImage')


    projectRouter.post('/create-project', upload.array('images', 8), createProject)

    projectRouter.get('/projects', getAllProject)


module.exports = projectRouter