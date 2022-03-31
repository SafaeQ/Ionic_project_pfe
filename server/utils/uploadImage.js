const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'images')   
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + "-" + file.originalname);
    }
})

// const fileFilter= (req, file, cb) => {    
//      const filetypes = /jpeg|jpg|png|gif/;
//     const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
//    const mimetype = filetypes.test(file.mimetype);
//    if(mimetype && extname){
//        return cb(null,true);
//    } else {
//        cb('Error: Images Only!');
//    }
//   }

const upload = multer({
    storage: storage,
    // fileFilter: fileFilter
})

module.exports = upload