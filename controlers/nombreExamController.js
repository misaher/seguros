const NombreExam = require('../models/NombreExamen');
const { json } = require('express');

exports.crearNombreExam = async (req,res)=>{
    let tipos; 
    let {nombre} = req.body;
    let buscaTipo;
       
    try{
        buscaNombre = await NombreExam.findOne({nombre})
        console.log(buscaTipo);

            if(buscaNombre){
                res.status(300).json({msg:'El Nombre evaluación ya esta  registrado :)'});
            }else{
              nombreEx= new NombreExam(req.body);
            await nombreEx.save(); 
            res.json({msg:'El Nombre evaluación registrado con exito :)'});
            }
    }catch(e){
        res.status(400).json({msg:'Error al dar de alta el nombre :('})
}
}

    exports.consultarNombreExam = async (req,res)=>{
    let nombresExam;
    try{
    nombresExam = await NombreExam.find()
            res.json({nombresExam})
    }catch(e){
        res.status(400).json({msg:'Error al buscar :('})
    }

    }