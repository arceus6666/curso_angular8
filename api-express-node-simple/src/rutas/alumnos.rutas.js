const { Router } = require('express');
const router = new Router();
const alumnos = require('../data/alumnos.json');
let currentId = alumnos[alumnos.length - 1] + 1;

router.get('/', (req, res) => {
  // res.json({ estado: 'OK', mensaje: '', datos: alumnos });
  res.json(alumnos);
});

router.get('/:id', (req, res) => {

  const id = parseInt(req.params.id);
  const alumno = alumnos.find(alumno => alumno.id === id);
  const datos = [];

  // res.json({ estado: 'ERROR', mensaje: 'no encontrado', datos });
  if (!alumno) return res.json(datos);

  datos.push(alumno);
  // res.json({ estado: 'OK', mensaje: '', datos });
  res.json(datos);

});

router.post('/', (req, res) => {

  currentId++;

  // const id = alumnos[alumnos.length - 1] + 1;
  const { nombres, apellidos, doc_identidad } = req.body;
  const alumno = alumnos.find(alumno => alumno.doc_identidad === doc_identidad);

  if (alumno) return res.json({ estado: 'ERROR', mensaje: 'registro ya existe', datos: [] });

  alumnos.push({ currentId, nombres, apellidos, doc_identidad });
  res.json({ estado: 'OK', mensaje: 'se inserto registro con exito', datos: [{ nombres, apellidos, doc_identidad }] });

});

router.put('/:id', (req, res) => {

  const id = parseInt(req.params.id, 10);
  const { nombres, apellidos, doc_identidad } = req.body;
  const index = alumnos.findIndex(alumno => alumno.id === id);

  if (index === -1) return res.json({ estado: 'ERROR', mensaje: 'registro no encontrado', datos: [] });

  alumnos[index] = { id, nombres, apellidos, doc_identidad };
  res.json({ estado: 'OK', mensaje: 'registro se actualizo con exito', datos: [{ nombres, apellidos, doc_identidad }] });

});

router.delete('/:id', (req, res) => {

  const id = parseInt(req.params.id);
  const index = alumnos.findIndex(alumno => alumno.id === id);

  if (index === -1) return res.json({ estado: 'ERROR', mensaje: 'registro no encontrado', datos: [] });

  alumnos.splice(index, 1);
  res.json({ estado: 'OK', mensaje: 'registro eliminado', datos: [] });

});

module.exports = router;
