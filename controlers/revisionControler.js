
const Revision = require('../models/Revision');
///Estas sera una version temporal para asignar los examenes en lo que se modifica la app Movil

exports.crearRevision = async (req,res)=>{
        const {nombre_eval,idUsuario}  = req.body;
   try{    
           let examenBs= await Revision.findOne({idUsuario:idUsuario ,nombre_eval:nombre_eval})
           if(examenBs){
                 res.status(400).json({msg:"El examen ya fue asignado para el usuario :) "})
           }else{
            
         let revision;
         ////guardar revisión 
          revision  = new Revision(req.body)
          await   revision.save()
          //// Mensaje de confirmacion 
             res.send('Calificación dada de Alta .. :) por favor agrege otro nombre');
            
           }
    } catch(e){
          // console.log(e);
            res.status(400).send('Hubo un error ----->>>>>   :( ');
            console.log(e);
    }

}

exports.obtenerRevisiones= async (req, res)=>{
         const {email} = req.params; 
         console.log("email--->>>>>>",email);
   try{
         let revisiones  = await Revision.find({idUsuario:email}) 
          res.json({revisiones})
   }catch(e){
         res.status(400).send("Error al obtener información :( ");
   }
}

exports.obtenerRevisionesTipo= async (req, res)=>{
   const {tipo} = req.params; 
   console.log("email--->>>>>>>>>>>>",tipo);
try{
   let  tiporevision  = await Revision.find({nombre_eval:tipo}) 
    res.json({tiporevision})
}catch(e){
   res.status(400).send("Error al obtener información :( ");
}
}

exports.actualizar = async (req,res)=>{
      let {califica,id}= req.body;
       console.log('califica-->',califica);
       console.log('Id----->',id);
      let revisar;
      const nuevaRevision={};
      nuevaRevision.evaluar= false;
      nuevaRevision.califiacion= califica;
          console.log();
      try{
            revisar= await Revision.findOneAndUpdate({idUsuario:id},nuevaRevision,{new: true});
               if(revisar){
            res.json({msg: "Datos Actualizados"})
               }
   }catch(e){
      res.status(400).json({msg:'sin resultados'});
   }     
}

exports.eliminarRevision= async(req,res)=>{
   const {id} = req.body;
   try{
         await  Revision.findOneAndRemove({_id:id});
         res.json({msg: "Examen Eliminado ... correctamente"});

   }catch(e){
         res.status(400).json({msg:'Error al eliminar'}); 
   }
}