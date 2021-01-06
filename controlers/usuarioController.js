const Usuario  = require('../models/Usuario');
const  bcryptjs = require ('bcryptjs');
const  jwt =  require('jsonwebtoken');
const { json } = require('express');
exports.crearUsusario= async(req,res)=>{
     const  {email} =req.body;
     const password ="1234567";
     
   try{
     let usuario = await   Usuario.findOne({email});
     if(usuario){
  
               return  res.status(400).json({ msg: 'El usuario ya existe :) :) ' });
           // return res.status(400).json({msg: 'El usuario ya existe registre otro  :( '})
     
       }else{

     
     usuario = new Usuario(req.body);
      ///hashear password
       const salt = await  bcryptjs.genSalt(10);
       usuario.password = await bcryptjs.hash(password,salt);
        await usuario.save()
        ////Craer y firmar el JWT
           const payload={
                  usuario:{
                       id: usuario.id
                  }  
           };
            ///firmar el JSONWEBTOKEN
            jwt.sign(payload,process.env.SECRETA,{
                   expiresIn:3600
            },(error,token)=>{
                   if(error) throw error
                   res.json({token})       
                   
            }) 
       }
   } catch(e){
         console.log(e);
         res.status(400).send('hubo un error al dar de alta el usuario');

   }

 
}
///
exports.altaMasiva =async (req,res)=>{
       let  generico;
       let password="1234567"
       let resetPassword;
        let  usuarios1= req.body;  
             
       try{
              const salt =  await bcryptjs.genSalt(10);
              resetPassword = await bcryptjs.hash(password,salt);
                
                //
                for(let i=0; i<usuarios1.length; i++){
                       usuarios1[i].password=resetPassword;
                 }
               //  console.log('--------->>>>');
                 //console.log(usuarios1);

                 Usuario.insertMany(usuarios1);
           res.json({msg: "Uusarios insertados correctamente"}); 
       }catch(e){
              res.status(400).json({msg:'Error al insertar usuarios'}); 
       }
}


///Consultar usuarios 
exports.consultarUsuarios= async(req,res) =>{
        try {
            let usuarios = await  Usuario.find();
                if(usuarios){ 
                     res.json({usuarios:usuarios});
                } else{
                       console.log("sin usuarios");
                     res.json({msg:"No hay usuarios"});
                }            

        }catch(e){
              res.status(400).json({msg:'Error al hacer la consuñ¿lta :('}); 
        }
}
///consultarUsuarioIndividual
exports.consultarUsuarioIndividual= async(req,res) =>{
       const {id} = req.params;
       console.log("------>>id",id)
       try {
           let usuario = await  Usuario.findOne({ _id:id});
               if(usuario){ 
                    res.json({usuario:usuario});
               } else{
                      console.log("sin usuarios");
                    res.json({msg:"No hay usuarios"});
               }            

       }catch(e){
             res.status(400).json({msg:'Error al hacer la consulta :('}); 
             console.log(e)
       }
}

///////
exports.actulizarUsuario = async(req,res)=>{
       let {email,nombre,id}= req.body;
       const updateUsuario ={}
       updateUsuario.email=email;
       updateUsuario.nombre= nombre; 
       let update;      
     try{   
          update =  await Usuario.findOneAndUpdate({_id:id},updateUsuario,{new: true});
            if(update){
                      res.json({msg: "Datos Actualizados correctamente"});
            }

     }catch(e){
       res.status(400).json({msg:'Error al hacer update'}); 
     }
}

exports.resetPassword= async(req,res)=>{
         let {email,password}= req.body;
               let resetPassword={};
               let usuario;
               let  update;
       try{
                usuario = await Usuario.findOne({email});
                
                if(!usuario){
                      return res.status(400).json({msg: "El correo no existente  :("});

                }else{
                      
                     const salt =  await bcryptjs.genSalt(10);
                     resetPassword.password = await bcryptjs.hash(password,salt);
                     update =  await Usuario.findOneAndUpdate({email:email},resetPassword,{new: true});
                     if(update){
                      res.json({msg: "Datos Actualizados correctamente"});
                      }
                    
                }

              
               
       }catch(e){
              res.status(400).json({msg:'Error al hacer reset'}); 
           
       }    


}

exports.eliminarUsario= async(req,res)=>{
        const {email} = req.body;
        try{
              await  Usuario.findOneAndRemove({email});
              res.json({msg: "Usuario Eliminado ... correctamente"});

        }catch(e){
              res.status(400).json({msg:'Error al eliminar'}); 
        }
}