const Association = require('../../models/association.model')

const getHashedPassword = require('../../utils/hashedPassword')

const {deletedImage} = require('../../utils/deleteFile')


const assoc_signup = async (req, res, next)=>{
    try {
        const {fullName, email, password, phoneNumber, adress, members, image, description} = req.body 

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
                phoneNumber,
                adress,
                members,
                description,
                image:avatar,
        })

        const result = await user.save()

        res.status(200).send(result)

    } catch (error) {

        res.status(404).send(error)
    }
    

}

const login = async (req, res) =>{

    const { email, password } = req.body
    
    const user = await Association.findOne({email});
    
    if (!user) return res.status(400).send(`Email Incorrect / Not Found! Please Register First.`);
    
    const validPassowrd = bcrypt.compare(password, user.password)
    
    if (!validPassowrd) return res.status(400).send('Password incorrect')
    
    const token = jwt.sign({ _id: user._id, role: user.role }, 'secret');

    res.status(200).json({ status: 'success', token });
    
}

module.exports = {assoc_signup, login}

