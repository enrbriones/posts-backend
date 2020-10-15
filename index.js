const express = require('express')
require('dotenv').config()
const cors = require('cors')


//Crear el servidor de express
const app = express();



///////////////////////////////////

// CORS
app.use(cors())

//Lectura y parseo del body
app.use(express.json())



//Rutas
app.use('/api/posts',require('./routes/posts'))



app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})