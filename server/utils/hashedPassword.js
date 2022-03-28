
const crypto = require('crypto')
const getHashedPassword = (password)=>{
    const sha256 = crypto.createHash('sha256');// strong hashing algorithm
    const hash = sha256.update(password).digest('base64')
    return hash
}

module.exports = getHashedPassword;