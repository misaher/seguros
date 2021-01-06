const express = require('express');
const  router= express.Router();
const revisionControler  = require('../controlers/revisionControler');

/////Crea una calificacion

///api/revision 


router.post('/',revisionControler.crearRevision)
router.get('/:email',revisionControler.obtenerRevisiones)
router.get('/nombre/:tipo',revisionControler.obtenerRevisionesTipo)
router.put('/',revisionControler.actualizar)
router.delete('/',revisionControler.eliminarRevision)
//eliminarRevision
module.exports = router;
