const Donor = require('../../models/donor.model')

const getHashedPassword = require('../../utils/hashedPassword')



const donor_signup = async (req, res) => {
    try {
        const {name, email, password} = req.body

        const oldDonor = await Donor.findOne({email})

        if (oldDonor) res.status(409).send('😊 your email already exist please login!')

        const hashedPassword = getHashedPassword(password)

        const donor = await Donor.create({name, email, password: hashedPassword})

        const result = await donor.save()

        res.status(200).send(result)

    } catch (error) {

        res.status(404).send(error)
    }
}

const login = async (req, res) =>{

    try {
        const { email, password } = req.body
        
        const user = await Association.findOne({email});
        
        if (!user) return res.status(400).send(`Email Incorrect / Not Found! Please Register First.`);
        
        const validPassowrd = bcrypt.compare(password, user.password)
        
        if (!validPassowrd) return res.status(400).send('Password incorrect')
        
        const token = jwt.sign({ _id: user._id, role: user.role }, 'secret');

        res.status(200).json({ status: 'success', token });

    } catch (err) {

        res.status(409).send(err)
    }
}

module.exports = {donor_signup, login}