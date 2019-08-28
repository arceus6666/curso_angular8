const { Router } = require('express');
const router = new Router();
const cursos = require('../data/cursos.json');

router.get('/', (req, res) => {
  // res.json({ estado: 'OK', mensaje: '', datos: cursos });
  res.json(cursos);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const curso = cursos.find(curso => curso.id === id);
  const datos = [];
  if (curso) {
    datos.push(curso);
    // res.json({ estado: 'OK', mensaje: '', datos });
    res.json(datos);
  }
  // else res.json({ estado: 'ERROR', mensaje: 'no encontrado', datos });
  else res.json(datos);
})

router.post('/', (req, res) => {
  const id = cursos.length + 1;
  const { nombre_curso } = req.body
  const curso = cursos.find(curso => curso.nombre_curso === nombre_curso);
  if (curso) res.json({ estado: 'ERROR', mensaje: 'curso ya existe', datos: [] });
  else {
    cursos.push({ id, curso });
    res.json({ estado: 'OK', mensaje: 'se inserto con exito', datos: [{ nombre_curso }] });
  }
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { curso } = req.body;
  const index = cursos.findIndex(curso => curso.id === id);
  if (index !== -1) {
    cursos[index] = { id, nombre_curso };
    res.json({ estado: 'OK', mensaje: 'se actualizo con exito', datos: [{ nombre_curso }] });
  } else res.json({ estado: 'ERROR', mensaje: 'registro no encontrado', datos: [] });
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cursos.findIndex(curso => curso.id === id);
  if (index !== -1) {
    cursos.splice(index, 1);
    res.json({ estado: 'OK', mensaje: 'registro eliminado', datos: [] });
  } else res.json({ estado: 'ERROR', mensaje: 'registro no encontrado', datos: [] });
});

module.exports = router;