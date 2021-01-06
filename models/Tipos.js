const mongoose = require('mongoose');

const  SchemaTipos = mongoose.Schema({
     tipo: {
        type: String,
        required: true,
    }

}) 


module.exports  = mongoose.model('Tipos',SchemaTipos);