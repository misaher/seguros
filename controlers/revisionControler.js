
const Revision = require('../models/Revision');

exports.crearRevision = async (req,res)=>{
    try{
           console.log('Ok datos');
            console.log(req.body);
         let revision;
         ////guardar revisión 
          revision  = new Revision(req.body)
          await   revision.save()
          //// Mensaje de confirmacion 
             res.send('Calificación dada de Alta .. :)');
    } catch(e){
          // console.log(e);
            res.status(400).send('Hubo un error ----->>>>>   :( ');
    }

}

exports.obtenerRegistros = async (req, res)=>{
   try{
         let revisiones  = await Revision.find() 
          res.json({revisiones})
   }catch(e){
         res.status(400).send("Error al obtener información :( ");
   }
}