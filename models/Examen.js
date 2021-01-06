const  mongoose =  require('mongoose');

const PreguntasShema= mongoose.Schema({
       pregunta:{
        type: String,
        required: true,
        trim: true
       },
       respuesta:{
           type: Number,
           required: true,
           trim: true
       },
      tipo:{
           type: String,
           required: true,
            trim: true
      },
      respuestas:{
           type: String,
           required: true
      }
      
})

module.exports =  mongoose.model('Preguntas',PreguntasShema);