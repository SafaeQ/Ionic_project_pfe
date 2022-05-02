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

module.exports = { createArticle, }