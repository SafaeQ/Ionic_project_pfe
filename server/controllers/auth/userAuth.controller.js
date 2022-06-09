const Association = require('../../models/association.model')

const Donor = require('../../models/donor.model')

const getHashedPassword = require('../../utils/hashedPassword')

const bcrypt = require('bcryptjs')

let jwt = require('jsonwebtoken')


const assoc_signup = async (req, res, next)=>{
    try {
        const {fullName, email, password, phoneNumber, adress, members, image, description, role} = req.body 

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
                image: avatar,
                role: 'association'
        })

        const result = await user.save()

        res.status(200).send(result)

    } catch (error) {

        res.status(404).send(error)
    }
    

}

const donor_signup = async (req, res) => {
    try {
        const {fullName, email, password, role} = req.body
        
        const oldDonor = await Donor.findOne({ email })

        if (oldDonor) res.status(409).send('😊 your email already exist please login!')

        const hashedPassword = getHashedPassword(password)

        const donor = await Donor.create({fullName, email, password: hashedPassword, role: 'donor'})

        const result = await donor.save()

        res.status(200).send(result)

    } catch (error) {

        res.status(404).send(error)
    }
}


const login = async (req, res) =>{
    try {
        const { email, password } = req.body
        console.log(req.body.email)
        const user = await Association.findOne({ });
        
        if (!user) return res.status(400).send(`Email Incorrect / Not Found! Please Register First.`);
        
        const validPassowrd = bcrypt.compare(password, user.password)
        
        if (!validPassowrd) return res.status(400).send('Password incorrect')
        
        const token = jwt.sign({ _id: user._id, role: user.role }, 'secret');
        
        res.status(200).json({ status: 'success', token });

    } catch (error) {
        
        res.status(404).send(error)
    }
}

const loginDonor = async (req, res) =>{
    try {
        const { email, password } = req.body
        
        const donor = await Donor.findOne({email});
        
        if (!donor) return res.status(400).send(`Email Incorrect / Not Found! Please Register First.`);
        
        const validPassowrd = bcrypt.compare(password, donor.password)
        
        if (!validPassowrd) return res.status(400).send('Password incorrect')
        
        const token = jwt.sign({ _id: donor._id, role: donor.role }, 'secret');
        
        res.status(200).json({ status: 'success', token });

    } catch (error) {
        
        res.status(404).send(error)
    }
}

module.exports = {assoc_signup, login, donor_signup, loginDonor}

