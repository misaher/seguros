const express =  require('express');
const router  = express.Router();
const respuestasController  = require('../controlers/respuestasController');


router.post('/',respuestasController.agregandoRespuestas);
router.get('/:id',respuestasController.obtenerRespuestas);




module.exports = router;