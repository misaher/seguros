const Usuario  = require('../models/Usuario');
const  bcryptjs = require ('bcryptjs');
const  jwt =  require('jsonwebtoken');
exports.crearUsusario= async(req,res)=>{
     const  {email,password} =req.body;
   try{
     let usuario = await   Usuario.findOne({email});
     if(usuario){
  
               return  res.status(400).json({ msg: 'El usuario ya existe :) :) ' });
           // return res.status(400).json({msg: 'El usuario ya existe registre otro  :( '})
     
       }else{

     
     usuario = new Usuario(req.body);
      ///hashear password
       const salt =  await bcryptjs.genSalt(10);
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
         console.log("error");
         res.status(400).send('hubo un error');

   }

 
}