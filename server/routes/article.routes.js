const articleRouter = require('express').Router()

const {createArticle, getAllArticles, getArticleById, updateArticle, deleteArticle} = require('../controllers/article.controller')

const upload = require('../utils/uploadImage')


    articleRouter.post('/create-article', upload.array('images', 8), createArticle)

    articleRouter.get('/articles', getAllArticles)

    articleRouter.get('/article/:id', getArticleById)

    articleRouter.put('/update-article/:id', updateArticle)

    articleRouter.put('/delete-article/:id', deleteArticle)


module.exports = articleRouter