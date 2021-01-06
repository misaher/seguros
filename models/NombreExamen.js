const mongoose = require('mongoose');

const  SchemaNombreExam = mongoose.Schema({
     nombre: {
        type: String,
        required: true,
    }

}) 


module.exports  = mongoose.model('NombreExam',SchemaNombreExam);