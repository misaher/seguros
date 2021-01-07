//Respuestas
const Respuestas = require('../models/Respuestas');
const { json } = require('express');

exports.agregandoRespuestas = async (req,res) =>{
      let arrS=[];
      let resp={id:"1",res:"2"}
      arrS.push(resp);
      let datos=JSON.stringify(arrS);
      let respt={ idExamen:"1HSH",respuestas:datos}
    try{
          console.log("OK res--->>>")
            console.log(respt);
            tipos= new Respuestas(respt);
              await tipos.save(); 
       // res.json({msg:'Respuestas guardadas:)'});
       res.json({msg:'Respuestas guardadas:)'});
            
}catch(e){
        res.status(400).json({msg:'Error al guaradar las respuestas :('})
        console.log(e);
}
}

exports.obtenerRespuestas = async (req,res)=>{
    let   {id} = req.params ; 
    try{  
               respuestas= await  Respuestas.find({idExamen:id})
            res.json({respuestas: respuestas})

    }catch(e){
        res.status(400).json({msg:'Error al consultar respuetas :('})
    }

}

