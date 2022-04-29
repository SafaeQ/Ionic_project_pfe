const Project = require('../models/project.model')


const createProject = async (req, res) => {

    const {name, budget, category, description, association} = req.body
    
    try {
        const imageFiles = req.files

        const uploadImages = []

        for (const imageFile of imageFiles) {

            uploadImages.push(imageFile.filename)
        }

        const project = await Project.create({name, budget, category, description, association, images: uploadImages})

        if (!project)  res.status(400).send('some thing wrong') 

        res.status(200).send(project)

    } catch (error) {

        res.status(500).send(error)
    }
}

const getAllProject = (req, res) => {
    
    Project.find()
        .then(data => {
            var message = "";
            if (data === undefined || data.length == 0) message = "No product found!";
            else message = 'Products successfully retrieved';

            res.send({
                success: true,
                message: message,
                data: data
            });
        }).catch(err => {
        res.status(500).send({
            success: false,
            message: err.message || "Some error occurred while retrieving products."
        });
    });

    // try {
    //     const project = await Project.find({})

    //     (!project) ? res.status(400).send('some thing wrong') : res.status(200).send(project)

    // } catch (error) {

    //     res.status(500).send(error)
    // }
}

module.exports = {createProject, getAllProject}