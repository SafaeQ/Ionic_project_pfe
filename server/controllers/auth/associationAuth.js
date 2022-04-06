const Association = require('../../models/association.model')

const getHashedPassword = require('../../utils/hashedPassword')

const {deletedImage} = require('../../utils/deleteFile')


const assoc_signup = async (req, res, next)=>{
    try {
        const {fullName, email, password, confirmPassword, image, description} = req.body 

        if (password === confirmPassword) {

            const oldUser = await Association.findOne({email})

            if (oldUser) res.status(409).send('😊user already exist, please login')

            const hashedPassword = getHashedPassword(password)

            const uploadedImageFile = req.files
            let avatar = [];
                for (const item of uploadedImageFile) {
                    avatar.push(item.filename)
                }

            const user = await Association.create({
                fullName,
                email: email.toLowerCase(),
                password: hashedPassword,
                confirmPassword,
                description,
                image:avatar,
            })

            const result = await user.save()

            res.status(200).send(result)

        }else {

            res.send('password does not match ')
        }
    } catch (error) {

        res.status(404).send(error)
    }
    

}

module.exports = {assoc_signup}






// if (image === '') {
//     const unwantedImages = req.file;
//     deletedImage(unwantedImages);
//     return res.status(400).send("error");
//   }
// const uploadedImageFile = req.file
// let avatar = [];

//     for (const item in uploadedImageFile) {
//         avatar.push(item.filename)
//     }
