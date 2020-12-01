const express = require('express');
const conectaDB = require ('./config/db');

////
const  app = express();
/////Conectar a la base de Datos
    conectaDB();
 /// habilitando express . JSON
 app.use(express.json({extended: true}));

/// para el ruteo...
 app.use('/api/revision',require('./routes/revision'))

 //....

///puerto d ela app
 const port  = process.env.port || 4000;
 ///definiendo prinicpal
   app.get('/',(req,res)=>{
         res.send('Hola Mundo');
   });

 /////

 app.listen(port,'0.0.0.0',()=>{
        console.log('El servidro esta funcionando en el puerto--> ',PORT);
 })