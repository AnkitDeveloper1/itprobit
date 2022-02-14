const util = require("util");
const multer = require("multer");
const path = require("path");
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const dates = Date.parse(Date());
    const file_name = path.parse(file.originalname).name+"_"+dates+path.parse(file.originalname).ext;
    cb(null, file_name);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb){
    
    // Set the filetypes, it is optional
    var filetypes = /jpeg|jpg|png/;
    var mimetype = filetypes.test(file.mimetype);

    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    
    if (mimetype && extname) {
      return cb(null, true);
    }
  
    cb("Error: File upload only supports the following filetypes - " + filetypes);
  }
}).single("featuredImage");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
