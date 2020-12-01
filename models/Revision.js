const  mongoose =  require('mongoose');

const  RevisionShema = mongoose.Schema({
        idExam:{
            type: String,
            required: true,
            trim: true
        },
        email:{
        type: String,
        required: true,
        trim: true
       },
         nombre:{
        type: String,
        required: true,
        trim: true
        },
         calif:{
            type: Number,
          required: true,
           trim: true
         },
        registro: {
            type: Date,
            default: Date.now()
        }

})


module.exports = mongoose.model('Revision',RevisionShema)