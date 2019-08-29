const { Router } = require('express');
const router = new Router();
const cursos = require('../data/cursos.json');
let curentId = cursos[cursos.length - 1].id;

router.get('/', (req, res) => {

  // res.json({ estado: 'OK', mensaje: '', datos: cursos });
  res.json(cursos);

});

router.get('/:id', (req, res) => {

  const id = parseInt(req.params.id);
  const curso = cursos.find(curso => curso.id === id);
  const datos = [];

  // else res.json({ estado: 'ERROR', mensaje: 'registro no encontrado', datos });
  if (!curso) return res.json(datos);

  datos.push(curso);
  // res.json({ estado: 'OK', mensaje: '', datos });
  res.json(datos);

});

router.post('/', (req, res) => {

  curentId++;
  
  // const id = cursos[cursos.length - 1].id + 1;
  const { nombre_curso } = req.body
  const curso = cursos.find(curso => curso.nombre_curso === nombre_curso);

  if (curso) return res.json({ estado: 'ERROR', mensaje: 'registro ya existe', datos: [] });

  cursos.push({ curentId, nombre_curso });
  res.json({ estado: 'OK', mensaje: 'se inserto con exito', datos: [{ nombre_curso }] });

});

router.put('/:id', (req, res) => {

  const id = parseInt(req.params.id, 10);
  const { nombre_curso } = req.body;
  const index = cursos.findIndex(curso => curso.id === id);

  if (index === -1) return res.json({ estado: 'ERROR', mensaje: 'registro no encontrado', datos: [] });

  cursos[index] = { id, nombre_curso };
  res.json({ estado: 'OK', mensaje: 'registro se actualizo con exito', datos: [{ nombre_curso }] });

});

router.delete('/:id', (req, res) => {

  const id = parseInt(req.params.id, 10);
  const index = cursos.findIndex(curso => curso.id === id);

  if (index === -1) return res.json({ estado: 'ERROR', mensaje: 'registro no encontrado', datos: [] });

  cursos.splice(index, 1);
  res.json({ estado: 'OK', mensaje: 'registro eliminado', datos: [] });

});

module.exports = router;
