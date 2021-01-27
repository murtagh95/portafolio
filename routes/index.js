const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const transporter = require('../config/mailer');
// const controller = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  const sql = 'SELECT * FROM proyectos';
  pool.query(sql, (err, results) => {
    if(err) throw err;

    if(results.length > 0 ) {
      res.render('index', {results});
    }
    else{
      console.log('No se encontro ningun proyecto')
    }
  })

});

// GET curriculum vitae
router.get('/cv', function(req, res, next) {
  
  res.render('cv', {varAux: true});

});

// POST HOME
router.post('/', (req, res) => {
  const {name, email, phone, message} = req.body;
  
  const contentHTML = `
    <h1>Información de contacto</h1>
    <ul>
      <li> Nombre : ${name} </li>
      <li> Email : ${email} </li>
      <li> Telefono : ${phone} </li>
      <li> Mensaje : ${message} </li>
    </ul>
  ` 

  const mailOption = {
    from: "Portafolio",
    to: 'nec.catalano@gmail.com',
    subject: "Información para contacto desde portafolio",
    html: contentHTML
  }

  transporter.sendMail(mailOption, (error, info) => {
    if(error) {
      console.log('Error al enviar mail: ' , error.message);
      req.flash("error", `Error al enviar mensaje: ${error.message}`);
    }
    else{
      console.log('Email enviado');
      req.flash('success', 'Mensaje enviado con exito.');
      res.redirect('/')
    }
  });

  
});

module.exports = router;
