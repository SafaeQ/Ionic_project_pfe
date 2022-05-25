const Project = require('../models/project.model')

const projectValidation = require('../validation/projectValidation')


const createProject = async (req, res) => {

    const {name, budget, category, description, association} = req.body
    
    try {
        const { error } = projectValidation(req.body);

        if (error) {
            const unwantedImages = req.files;

            deleteFile.deleteFile(unwantedImages);

            return res.status(400).send(error.details[0].message);
        }

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
    
    Project.find().populate('association').populate('category')
        .then(data => {
            
            let message = "";

            if (data === undefined || data.length == 0) message = "No project found!";

            else message = 'projects successfully retrieved';

            res.send({ success: true, message: message, data: data });

        }).catch(err => {

        res.status(500).send({ success: false, message: err.message || "Some error occurred while retrieving projects." });
    });
}

const getProjectById = (req, res) => {

    const id = req.params.id

    Project.findById(id)
        .then(data => {

            if(!data) return res.status(404).send({ success: false, message: "Project not found with id " + id });
            
            res.send({ success: true, message: 'Project successfully retrieved', data: data });

        }).catch(err => {

        if(err.kind === 'ObjectId') return res.status(404).send({ success: false, message: "Project not found with id " + id });
        
        return res.status(500).send({
            success: false,
            message: "Error retrieving Project with id " + id
        });
    });
}

const updateProject = async (req, res) => {
    
    try{
    const id = req.params.id

    const {name, budget, description} = req.body

    const imageFiles = req.files//

    const uploadImages = []

    for (const imageFile of imageFiles) {

        uploadImages.push(imageFile.filename)
    }
    
    const project = await Project.updateOne({_id: id}, {
        name: name,
        budget: budget,
        description: description,
        images: uploadImages
    })
    console.log('rrrr', req.body);
    if (!project) {
        return res.status(404).send({ success: false, message: "Project not found with id " + id });
    }

    res.send({
        success: true,
        message: 'Project updated succefully'
    })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error
        })
    }
}

const deleteProject = (req, res) => {
    
    const id = req.params.id

    const projectDeleted = Project.findOneAndRemove(id)

    projectDeleted.then((data)=> { 
                    res.status(200).send({
                        message:'project has been deleted',
                        success:true, data: data
                    })})
                .catch((error)=> { 
                    res.status(404).send({
                        success: false, 
                        message:error 
                    })})
}
module.exports = {createProject, getAllProject, getProjectById, updateProject, deleteProject}