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

            if (req.files.length === 0 || req.files.length > 2) {
                const unwantedImagesRoom = req.files;
                deleteFile.deleteFile(unwantedImagesRoom);
                return res.status(400).send("Please choose 1");
              }

            const uploadedImageFile = req.files
            let avatar = '';
                for (const item in uploadedImageFile) {
                    avatar= item.filename
                }

            // console.log(req.files);
            const user = await Association.create({
                fullName,
                email: email.toLowerCase(),
                password: hashedPassword,
                confirmPassword,
                description,
                image: 'qrcode.png',
            })
            console.log('----------------------------------',user);

            const result = await user.save()
            // console.log(result);
            res.status(200).send(result)
        }else {
            res.send('password does not match ')
        }
    } catch (error) {
        console.log(error);
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
