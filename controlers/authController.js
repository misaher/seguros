const Usuario  = require('../models/Usuario');
const  bcryptjs = require ('bcryptjs');
const  jwt =  require('jsonwebtoken');

exports.autenticaUsuario = async( req,res)=>{
   
    ////   extraer password y email 
     console.log('OK req');
       console.log(req.body);
      const {email,password} =req.body;
        try{
           let usuario = await  Usuario.findOne({email});
                 console.log('--------------->>');
                 console.log(usuario);
              if(!usuario){
                    return res.status(400).json({msg:'El usuario no existe :( '})
              }  
              ////revisar paswords
              const passcorect = await   bcryptjs.compare(password,usuario.password)
              if(!passcorect){
                return res.status(400).json({msg:'Password incorrecto'})
              }
  /////////////////////////77
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
             if(error) throw error;
             
             res.json({token, usuario: usuario})       
             
      }) 

          //////////    

        }catch(e){
             console.log('Error : )', e);
        }
}  