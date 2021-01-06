const express = require('express');
const router = express.Router();
const preguntasController= require('../controlers/preguntasController');
 
 router.post('/',preguntasController.crearPregunta);
 router.post('/masivas',preguntasController.cargaMasiva);
 router.get('/',preguntasController.consultaPreguntas);
 router.get('/pregunta/:id',preguntasController.consultarPregunta)
 //// Preguntas por tipos 
 router.get('/tipos/:id',preguntasController.preguntasTipo)
 router.put('/',preguntasController.editarPregunta);
 router.delete('/',preguntasController.eliminarPregunta);

module.exports = router;