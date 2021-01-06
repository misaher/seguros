const express =  require('express');
const router  = express.Router();
const  tipoController =  require('../controlers/tipoController'); 


router.post('/',tipoController.crearTipo)
router.get('/',tipoController.consultarTipos)
router.put('/',tipoController.editarTipos)
router.delete('/',tipoController.borrarTipo)

module.exports = router;