const express = require('express');
const router = express.Router();
const usuarioController = require('../controlers/usuarioController');
  
router.post('/',usuarioController.crearUsusario);

module.exports = router;