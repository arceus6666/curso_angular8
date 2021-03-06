class Saludo {
  texto: string;
  constructor(mensaje: string) {
    this.texto = mensaje;
  }
  saludar(): string {
    return this.texto;
  }
}
let saludo = new Saludo("Hola Mundo!");
// console.log(saludo.saludar());

const factorial = (num: number): number => {
  if (num <= 0) return 1
  else return (num * factorial(num - 1))
}
// console.log(factorial(5));

interface Persona {
  nombres: string,
  apellido: string,
  edad: number,
  estado: boolean
}

let alumno: Persona;

alumno = {
  nombres: 'ana',
  apellido: 'gomez',
  edad: 25,
  estado: true
};

// console.log('alumno:', alumno)

let alumnos: Array<Persona> = [];

alumnos.push(alumno);
alumnos.push({ nombres: 'jorge', apellido: 'chavez', edad: 30, estado: true });
alumnos.push({ nombres: 'abel', apellido: 'lopez', edad: 27, estado: true });

// alumnos.forEach(a => {
//   console.log('alumno:', a)
// })

import Empleado from './Empleado';

let empleado = new Empleado(1, 'Ana Gomez');
// console.log('---[ clases ]---');
// console.log(`Empleado : ${empleado.nombres} ${empleado.getSalario()}`);

import Alumno from './alumno';

// console.log('---[ clases herencia ]---');
let alum = new Alumno(22222, 123, 'Jose Vargas');

// alum.verRegistro();

import Curso from './curso';

// console.log('---[ clases public, private ]---');
let curso = new Curso();

curso.codigo = 123;
curso.nombre = 'Jorge Chavez';

// console.log(curso.info());

console.log('---[ clases static ]---');

import Util from './util';

console.log(Util.fechaActual());
console.log(Util.monedaNacional);