const express = require('express');
const conectaDB = require ('./config/db');
const cors =  require('cors');

////
const  app = express();
/////Conectar a la base de Datos
    conectaDB();
//// habilitar cors
     app.use(cors());
 /// habilitando express . JSON
 app.use(express.json({extended: true}));


///puerto d ela app
 const port  = process.env.PORT || 4000;
 ///definiendo prinicpal
 /// para el ruteo...
 app.use('/api/revision',require('./routes/revision'))
 app.use('/api/usuarios',require('./routes/usuarios'))
 app.use('/api/auth',require('./routes/auth'))
 app.use('/api/validaexam',require('./routes/validarExamen'))
 app.use('/api/preguntas',require('./routes/preguntas'))
 app.use('/api/tipos',require('./routes/tipos'))
 app.use('/api/nombreexam',require('./routes/nombreexam'))
 


 //....


 app.listen(port,'0.0.0.0',()=>{
        console.log('El servidro esta funcionando en el puerto--> ',port);
 })