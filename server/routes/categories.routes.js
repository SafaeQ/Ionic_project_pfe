const categoryRouter = require('express').Router()

const {createCategory, getAllCategories, editCategoryName, deleteCategory} = require('../controllers/category.controller')


    categoryRouter.post('/create-category', createCategory)

    categoryRouter.get('/categories', getAllCategories)

    categoryRouter.put('/update-category/:id', editCategoryName)

    categoryRouter.delete('/delete-category/:id', deleteCategory)


module.exports = categoryRouter