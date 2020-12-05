const mongoose  = require('mongoose');
 require('dotenv').config({path: 'variables.env'});

  const   conectaDB  = async ()=>{
       // console.log('Hola--->>>>>  :)',process.env.MONGO_DB);
           try{
                      await   mongoose.connect(process.env.MONGO_DB,{
                               useNewUrlParser : true,
                               useUnifiedTopology: true,
                               useFindAndModify: false
                      });
                       console.log('Base de datros conectada :) ');
          }catch(e){
                 console.log("Error :)" ,e);
                 process.exit(1);
          }
  }


  module.exports =  conectaDB;