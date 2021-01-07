const express = require('express');
const  router= express.Router();
const examController  = require('../controlers/examController');

/////Crea una calificacion

///api/revision 


router.post('/',examController.validarExam)
router.post('/obtenerexem',examController.validarExam2)
router.get('/:email',examController.obtenerExamenes)

module.exports = router;