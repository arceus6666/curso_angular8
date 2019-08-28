import { Curso } from './curso';
import { Alumno } from './alumno';

export interface RestData {
  mensaje: string,
  estado: string,
  datos: Array<Curso> | Array<Alumno> | any
}
