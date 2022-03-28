const Association = require('../../models/association.model')
const getHashedPassword = require('../../utils/hashedPassword')

const assoc_signup = async (req, res)=>{
    try {
        const {fullName, email, password, confirmPassword, image, description} = req.body 

        if (password === confirmPassword) {

            const oldUser = await Association.findOne({email})

            if (oldUser) res.status(409).send('😊user already exist, please login')

            const hashedPassword = getHashedPassword(password)

            const uploadimage = req.file
            console.log(req.file);
            const user = await Association.create({
                fullName,
                email: email.toLowerCase(),
                password: hashedPassword,
                confirmPassword,
                image: uploadimage,
                description
            })

            res.status(200).send(user)
        }else {
            res.send('password doesnot match ')
        }
    } catch (error) {
        console.log(error);
    }
    

}

module.exports = {assoc_signup}