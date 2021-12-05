
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/dbconfig');

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


/* Ejecutar servidor web */
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.clear();
  console.log(`Servidor web iniciado en el puerto ${port}`);
});



