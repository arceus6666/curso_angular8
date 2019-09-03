const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
// settings
app.set('port', process.env.PORT || 3001);
// middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// routes
app.use('/api-cognos/alumnos', require('./rutas/alumnos.rutas'));
app.use('/api-cognos/cursos', require('./rutas/cursos.rutas'))
// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});