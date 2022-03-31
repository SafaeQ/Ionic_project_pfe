const fs = require('fs')

const deletedImage = (unwantedImages)=>{
    for (const unwantedImage of unwantedImages) {
        fs.unlink(
            `.../api/register/${unwantedImage}.filename`,
            (err)=>{
                if(err) throw err
                console.log('image deleted');
            }
        )
    }
}

module.exports = {
    deletedImage
}