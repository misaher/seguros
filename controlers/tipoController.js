const Tipos = require('../models/Tipos');
const { json } = require('express');


    exports.crearTipo = async (req,res)=>{
        let tipos; 
        let {tipo} = req.body;
        let buscaTipo;
             buscaTipo = await Tipos.findOne({tipo})
             console.log(buscaTipo);
        try{
                if(buscaTipo){
                    res.json({msg:'El tipo ya esta  registrado :)'});
                }else{
                tipos= new Tipos(req.body);
                await tipos.save(); 
            res.json({msg:'Tipo registrada :)'});
                }
    }catch(e){
            res.status(400).json({msg:'Error al dar de alta el tipo :('})
    }
    }
    exports.consultarTipos = async(req,res) =>{
        let tipos;   
        try{  
                tipos= await  Tipos.find()
                res.json({tipos: tipos})

        }catch(e){
            res.status(400).json({msg:'Error al consultar tipos :('})
        }

    }

    exports.editarTipos= async (req,res) =>{
            const {id,tipoUpdate} = req.body;
              
            let update;
            let updateTipo={
                tipo: tipoUpdate     
            }
        try{
                let update= await   Tipos.findOneAndUpdate({_id:id},updateTipo,{new: true});
                if(update){
                    res.json({msg: "Tipo Actualizado correctamente"});
        }

        }catch(e){
            res.status(400).json({msg:'Error al editar tipo :('})  
        }
    }
   
  exports.borrarTipo = async (req,res) =>{
          const {id} = req.body;
    try{
             await Tipos.findOneAndRemove({_id:id});
              res.json({msg:'Tipo Elimando con exito :)'})
    }catch(e){
        res.status(400).json({msg:'Error al  borrar tipo :('})
    }

}
