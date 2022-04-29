const projectRouter = require('express').Router()

const {createProject, getAllProject, getProjectById, updateProject} = require('../controllers/project.controller')

const upload = require('../utils/uploadImage')


    projectRouter.post('/create-project', upload.array('images', 8), createProject)

    projectRouter.get('/projects', getAllProject)

    projectRouter.get('/projects/:id', getProjectById)

    projectRouter.put('/update-project/:id', updateProject)


module.exports = projectRouter