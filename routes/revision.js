const express = require('express');
const  router= express.Router();
const revisionControler  = require('../controlers/revisionControler');

/////Crea una calificacion

///api/revision 


router.post('/',revisionControler.crearRevision)
router.get('/',revisionControler.obtenerRegistros)

module.exports = router;
