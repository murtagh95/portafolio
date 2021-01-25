const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const path = require('path');
const multer = require('multer');
const {uuid} = require('uuidv4');


// Config Multer
const storage = multer.diskStorage({
  destination: 'public/img',
  filename: (req, file, cb) => {
    // Asignop un nombre aleatorio al archivo y le agrego su extención
    cb(null, uuid() + path.extname(file.originalname).toLowerCase());
  }
})

// // Configuro donde se cargaran las imagenes
const upload = multer({  
  storage,
  dest: 'public/img',
  limits: {fileSize: 1000000},
  fileFilter: (req, file, cb) => {
    const fileType = /jpeg|jpg|png|gif/;
    // Verifico que la extención del archivo sea valido
    const mimetype = fileType.test(file.mimetype);
    const extname = fileType.test(path.extname(file.originalname));
    
    if(mimetype && extname){
      return cb(null, true);
    }
    cb('ERROR: Archivo debe ser una imagen valida.')
  }
}).single('image');

router.get('/', function(req, res, next) {

  res.render('admin/agregar');

});

router.post('/upload', upload, (req, res) => {
  console.log(req.file);
  res.send('Subido');
});


module.exports = router;
