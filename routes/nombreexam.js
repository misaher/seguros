const express =  require('express');
const router  = express.Router();
const  nombreExamController =  require('../controlers/nombreExamController'); 


router.post('/',nombreExamController.crearNombreExam)
router.get('/',nombreExamController.consultarNombreExam)

module.exports = router;