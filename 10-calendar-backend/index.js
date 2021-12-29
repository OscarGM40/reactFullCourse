require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/dbconfig');
const path = require('path');

/* Inicializaciones */
const app = express();
dbConnection();

/* Middlewares */
app.use(express.json());
app.use(cors());
app.use("/",express.static('public'));
// app.use(express.static(path.join(__dirname, './public')));

/*  Rutas */
app.use('/api/auth',require('./routes/auth.routes'));
app.use('/api/events',require('./routes/events.routes'));

app.get('*', (req,res)=> {
    res.sendFile(path.join(__dirname,'public/index.html'))
});

/* Ejecutar servidor web */
app.listen(process.env.PORT, () => {
  console.clear();
  console.log(`Servidor web iniciado en el puerto ${process.env.PORT}`);
});



