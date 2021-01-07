const  mongoose =  require('mongoose');

const  RevisionShema = mongoose.Schema({
        idUsuario:{
            type: String,
            required: true,
            trim: true
        },
        email:{
          type: String,
          required: true,
          trim: true
        },
        nombre_eval:{
        type: String,
        required: true,
        trim: true
       },
         evaluar:{
        type: Boolean,
        required: true,
        trim: true
        },
         numero_pre:{
          type: Number,
          required: true,
          trim: true
          },
         califiacion:{
            type: Number,
          required: true,
           trim: true
         },
        registro: {
            type: Date,
            default: Date.now()
        },
        envioExamen:{
          type: String,
          default:"",
        }

})


module.exports = mongoose.model('Revision',RevisionShema)