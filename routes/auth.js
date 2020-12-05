const express = require('express');
const router = express.Router();
const  authController = require('../controlers/authController');
  
router.post('/',authController.autenticaUsuario);

module.exports = router;