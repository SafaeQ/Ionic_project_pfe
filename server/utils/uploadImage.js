const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {

        cb(null, './images');
    },
    filename: function(req, file, cb) {
        console.log(file.filename);
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const upload = multer({
    storage: storage
});


// const uploads = upload.array('image', 8);




 module.exports= upload