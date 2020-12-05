const express = require('express');
const  router= express.Router();
const examController  = require('../controlers/examController');

/////Crea una calificacion

///api/revision 


router.post('/',examController.validarExam)
//router.get('/',revisionControler.obtenerRegistros)

module.exports = router;