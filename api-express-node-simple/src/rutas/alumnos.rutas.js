const { Router } = require('express');
const router = new Router();
const alumnos = require('../data/alumnos.json');
router.get('/', (req, res) => {
  res.json({ estado: 'OK', messaje: '', datos: alumnos });
});
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const alumno = alumnos.find(alumno => alumno.id === id);
  const datos = [];
  if (alumno) {
    datos.push(alumno);
    res.json({ estado: 'OK', messaje: '', datos });
  }
  else res.json({ estado: 'ERROR', messaje: 'no encontrado', datos });
})
router.post('/', (req, res) => {
  const id = alumnos.length + 1;
  const { nombres, apellidos, doc_identidad } = req.body;
  const alumno = alumnos.find(alumno => alumno.doc_identidad === doc_identidad);
  if (alumno) res.json({ estado: 'ERROR', messaje: 'alumno ya existe', datos: [] });
  else {
    alumnos.push({ id, nombres, apellidos, doc_identidad });
    res.json({ estado: 'OK', messaje: 'se inserto con exito', datos: [{ nombres, apellidos, doc_identidad }] });
  }
});
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombres, apellidos, doc_identidad } = req.body;
  const index = alumnos.findIndex(alumno => alumno.id === id);
  if (index !== -1) {
    alumnos[index] = { id, nombres, apellidos, doc_identidad };
    res.json({ estado: 'OK', messaje: 'se actualizo con exito', datos: [{ nombres, apellidos, doc_identidad }] });
  } else res.json({ estado: 'ERROR', messaje: 'registro no encontrado', datos: [] });
});
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = alumnos.findIndex(alumno => alumno.id === id);
  if (index !== -1) {
    alumnos.splice(index, 1);
    res.json({ estado: 'OK', messaje: 'registro eliminado', datos: [] });
  } else res.json({ estado: 'ERROR', messaje: 'registro no encontrado', datos: [] });
});
module.exports = router;