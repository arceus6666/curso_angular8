// es6 funcion flecha
const factorial = (num) => num <= 0 ? 1 : num * factorial(--num);

// console.log(factorial(6));

//es6 numerico

const tipo_cambio = new Number('6.96');
// console.log(tipo_cambio * 2);

//es6 objectos

const alumno = {
  nombre: 'Marcelo',
  apellido: 'Moscoso',
  func: () => 'hola mundo'
};

// console.log(alumno.nombre)
// console.log(alumno.apellido)
// console.log(alumno.func())

//es6 boolean
const val = new Boolean('false');
// if (val.value) console.log('verdad');
// else console.log('falso')


//es6 string
const descripcion = new String('porcentaje 10%');
// console.log(descripcion.toUpperCase());

//es6 plantillas
const mensaje = () => 'plantilla';
const parametro = '10%';

// console.log(` el parametro es ${parametro} de la ${mensaje()} `)

/*************************************/

//ES6 array
const cursos = ['nodejs', 'angular', 'react', 'mongodb', 'sql'];
cursos.splice(2, 0, 'postgres'); //agrega
// console.log(cursos);

const eliminado = cursos.splice(3, 1); //elimina
// console.log(`${cursos} elemento eliminado: ${eliminado}`);

cursos.push('ms-sqlserver'); //agrega al final
// console.log(cursos);

const curso = cursos.find(elem => elem === 'mongodb');
// if (curso) console.log(`curso encontrado ${curso}`);

for (let i in cursos) {
  // console.log(cursos[i])
}

cursos.forEach(curso => {
  // console.log(curso);
});

cursos.map((curso, index) => {
  // console.log(index, curso);
});

const cursosSinSql = cursos.filter(curso => curso !== 'sql');
// console.log('nosql:',cursosSinSql);

//ES6 Collecciones
const roles = new Map([
  ['r1', 'Usuario'],
  ['r2', 'Invitado'],
  ['r3', 'AdminAdministrador'],
]);
// console.log(roles.get('r2'));

const horarios = new Map();
horarios.set('0001', { curso: 'nodejs', horario: '19:00-22:00' });
horarios.set('0002', { curso: 'angular', horario: '07:00-09:00' });
horarios.set('0003', { curso: 'react', horario: '12:00-14:00' });
// console.log(horarios.get('0002'));
horarios.forEach(hora => {
  // console.log(hora);
});

const alumnos = [];
alumnos.push({ nombre: 'a', edad: 1 });
alumnos.push({ nombre: 'b', edad: 2 });
alumnos.push({ nombre: 'c', edad: 3 });
alumnos.push({ nombre: 'jorge', edad: 4 });

const edadJorge = alumnos.find(a => a.nombre === 'jorge').edad;

// console.log(edadJorge)

/**************************************/


//ES6 control de excepciones
let a = 100;
let b = 0;
try {
  if (b == 0) {
    throw ('Divide by zero error.');
  } else {
    let c = a / b;
    // console.log(c)
  }
} catch (e) {
  // console.log(`Error ${e} `);
}

//ES sintaxis extendida o sintáxis spread
sum = (x, y, z) => {
  return x + y + z;
}

const numbers = [1, 2, 3];
// console.log(sum(...numbers));

const arr = [1, 2, 3];
const arr1 = [...arr];
arr1.push(4);
// console.log(arr1);

const arr2 = [0, 1, 2];
const arr3 = [3, 4, 5];
arr2.push(...arr3);
// console.log(arr2);

let objs = [
  { nombre: 'a', edad: 25 },
  { nombre: 'b', edad: 30 },
  { nombre: 'c', edad: 70 },
  { nombre: 'd', edad: 12 },
  // {nombre:'e',edad:},
  // {nombre:'f',edad:},
]
console.log(objs)
for (let i = 0; i < objs.length - 1; i++) {
  let cur = objs[i];
  let next = objs[i + 1];
  if (next.edad < cur.edad) {
    objs[i] = next;
    objs[i + 1] = cur;
    i = -1;
  }
}

console.log('*******************\n', objs)

