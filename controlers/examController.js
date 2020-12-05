
const Revision = require('../models/Revision');

exports.validarExam = async (req,res)=>{
    try{
           console.log('Ok datos');

           const {id} =req.body;
            console.log('Ok id------------->>>>>>>>',id);
         let revision;
         ////guardar revisión 
          let  resultado =  await Revision.findOne({idUsuario:id,evaluar:true});
             //revision  = new Revision(req.body)
              if(resultado){
              
                res.json({ examen: resultado})  
              } else{
                return res.status(400).json({msg:'sin resultados'})
              }      
          
    } catch(e){
          // console.log(e);
            res.status(400).send('Hubo un error ----->>>>>   :( ');
    }

}