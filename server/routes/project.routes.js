const projectRouter = require('express').Router()

const {createProject, getAllProject, getProjectById, updateProject, deleteProject} = require('../controllers/project.controller')

const upload = require('../utils/uploadImage')

const checkAuthentication = require('../middlewares/isAuth')

const isAuthorized = require('../middlewares/permission')

// coach
    projectRouter.post('/create-project', checkAuthentication, upload.array('images', 8), createProject)

    projectRouter.get('/projects',checkAuthentication, getAllProject)

    projectRouter.get('/projects/:id',checkAuthentication, getProjectById)

    projectRouter.put('/:id',checkAuthentication, upload.array('images', 8), updateProject)

    projectRouter.delete('/:id',checkAuthentication,  deleteProject)


module.exports = projectRouter