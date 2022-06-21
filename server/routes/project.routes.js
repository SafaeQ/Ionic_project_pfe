const projectRouter = require('express').Router()

const {createProject, getAllProject, getProjectById, updateProject, deleteProject} = require('../controllers/project.controller')

const upload = require('../utils/uploadImage')

const checkAuthentication = require('../middlewares/isAuth')

const isAuthorized = require('../middlewares/permission')


    projectRouter.post('/create-project', checkAuthentication,isAuthorized('association'), upload.array('images', 8), createProject)

    projectRouter.get('/projects',checkAuthentication, getAllProject)

    projectRouter.get('/projects/:id',checkAuthentication, getProjectById)

    projectRouter.put('/update-project/:id',checkAuthentication,isAuthorized('association'),  upload.array('images', 8), updateProject)

    projectRouter.delete('/delete-project/:id',checkAuthentication,isAuthorized('association'),  deleteProject)


module.exports = projectRouter