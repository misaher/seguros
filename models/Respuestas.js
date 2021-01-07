const mongoose = require('mongoose');

const  SchemaRespuestas = mongoose.Schema({
   idExamen: {
        type: String,
        required: true,
    },
     respuestas: {
        type: String,
        required: true,
    }

}) 


module.exports  = mongoose.model('Respuestas',SchemaRespuestas);