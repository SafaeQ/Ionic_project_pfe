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
            message: "Error retrieving Project with id " + id,
            error
        });
    }
}

module.exports = { createArticle, getAllArticles, getArticleById}