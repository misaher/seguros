const express = require('express');
const router = express.Router();
const usuarioController = require('../controlers/usuarioController');
  
router.post('/',usuarioController.crearUsusario);
router.post('/masivos',usuarioController.altaMasiva);
router.get('/',usuarioController.consultarUsuarios);
router.get('/individual/:id',usuarioController.consultarUsuarioIndividual);
router.put('/',usuarioController.actulizarUsuario);
router.put('/resetPassword',usuarioController.resetPassword);
router.delete('/',usuarioController.eliminarUsario);

module.exports = router;