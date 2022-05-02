const Article = require('../models/article.model')


const createArticle = async (req, res) => {

    const {title, description, project_id, date} = req.body
    
    try {
        const imageFiles = req.files

        const uploadImages = []

        for (const imageFile of imageFiles) {

            uploadImages.push(imageFile.filename)
        }

        const article = await Article.create({title,description, project_id, date, images: uploadImages})

        if (!article)  res.status(400).send('some thing wrong') 

        res.status(200).send(article)

    } catch (error) {

        res.status(500).send(error)
    }
}

const getAllArticles = async (req, res) => {
    
    try {
        const article = await Article.find()
        
        let message = ''

        if (article === undefined || article.length == 0) message = "No project found!";

        else message = 'projects successfully retrieved';

        res.send({ success: true, message: message, data: article });

    } catch (error) {
        
        res.status(404).send(error)
    }
}

const getArticleById = async (req, res) => {

    try {
        const id = req.params.id

        const article = await Article.findById(id)
                
        res.send({ success: true, message: 'Project successfully retrieved', data: article });
    
    } catch (error) {
        
        return res.status(500).send({
            success: false,
            message: error,
        });
    }
}

const updateArticle = async (req, res) => {
    
    try{
    const id = req.params.id

    const {title, date, project_id, description} = req.body

    const imageFiles = req.files

    const uploadImages = []

    for (const imageFile of imageFiles) {

        uploadImages.push(imageFile.filename)
    }
    
    const articleUpdate = await Article.updateOne({_id: id}, {
        title: title,
        date: date,
        project_id: project_id,
        description: description,
        images: uploadImages
    })
    
    if (!articleUpdate) {
        return res.status(404).send({ success: false, message: "Article not found with id " + id });
    }

    res.send({
        success: true,
        message: 'Article updated succefully'
    })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}

module.exports = { createArticle, getAllArticles, getArticleById}