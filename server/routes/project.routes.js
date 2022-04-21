const projectRouter = require('express').Router()

const createProject = require('../controllers/project.controller')

const { uploads } = require('../utils/uploadImage')


    projectRouter.post('/create-project', uploads, createProject)


module.exports = projectRouter