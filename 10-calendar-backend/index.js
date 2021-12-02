
require('dotenv').config();
const express = require('express');
const cors = require('cors');

/* Inicializaciones */
const app = express();

/* Middlewares */
app.use("/",express.static('public'));
app.use(express.json());
// app.use(express.static(path.join(__dirname, './public')));
app.use(cors());

/*  Rutas */
app.use('/api/auth', require('./routes/auth.routes'));



/* Ejecutar servidor web */
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.clear();
  console.log(`Servidor web iniciado en el puerto ${port}`);
});



