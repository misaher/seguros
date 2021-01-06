const Preguntas = require('../models/Examen');
const { json } = require('express');
exports.crearPregunta= async(req,res)=>{
     let pregunta;

    try{ 
           pregunta = new Preguntas(req.body);
           await pregunta.save()
           res.json({msg:'Pregunta registrada :)'});

   }catch(e){
         res.status(400).json({msg:'Hubo un erro al insertar la pregunta'});
   }

}

exports.cargaMasiva= async(req,res)=>{
    
   try{ 
        // pregunta = new Preguntas(req.body);
            Preguntas.insertMany(req.body);
          res.json({msg:'Preguntas registradas :)'});

  }catch(e){
        res.status(400).json({msg:'Hubo un erro al insertar la pregunta'});
  }

}
///
exports.consultaPreguntas= async(req,res) =>{
        try{
         let   preguntas = await Preguntas.find();
               res.json({preguntas:preguntas})
        }catch(e){
            res.status(400).json({msg:'Hubo un erro al realizar la consulta'});
        }

}
///
exports.consultarPregunta = async (req,res) =>{
      //const {id_pregunta} =  req.body; 
     try{
          let pregunta = await Preguntas.findById(req.params.id);
            res.json({pregunta: pregunta})
     }catch (e){
        res.status(400).json({msg: 'Hubo un erro al realizar la consulta'});
          console.log(e)
     }
}

exports.preguntasTipo = async(req,res)=>{
         
    try{    
            let preguntas= await Preguntas.find({tipo:req.params.id});
            res.json({preguntas: preguntas})
    }catch(e){
        res.status(400).json({msg:'Hubo un erro al realizar la consulta'});
    }
}

////
exports.editarPregunta = async(req,res)=>{
    const {id,pregunta, respuesta, tipo, respuestas}=req.body;
    let update;
  
    let  updatePregunta={}
        updatePregunta.pregunta=pregunta;
        updatePregunta.respuesta=respuesta;
        updatePregunta.tipo=tipo;
        updatePregunta.respuestas=respuestas

    
   try{ 
        // pregunta = new Preguntas(req.body);
        update =  await Preguntas.findOneAndUpdate({_id:id},updatePregunta,{new: true});
        if(update){
                  res.json({msg: "Pregunta Actualizada correctamente"});
        }
          

  }catch(e){
        res.status(400).json({msg:'Hubo un erro al insertar la pregunta'});
  }

}

exports.eliminarPregunta= async(req,res)=>{
     let {id} = req.body;
    
   try{ 
            await Preguntas.findOneAndRemove({_id:id})
          res.json({msg:'Pregunta Eliminada :)'});

  }catch(e){
        res.status(400).json({msg:'Hubo un erro al insertar la pregunta'});
  }

}


