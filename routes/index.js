const express = require('express');
const router = express.Router();
const pool = require('../database')

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

module.exports = router;
