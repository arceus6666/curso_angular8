import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private alumnos: Array<Alumno>;
  private cursos: Array<string>;

  constructor() {
    this.alumnos = [
      { ci: 123456, nombre: "Ana", apellido: "Gomez", curso: "Angular" },
      { ci: 223344, nombre: "Jorge", apellido: "Chavez", curso: "Nodejs" },
      { ci: 111111, nombre: "Marco", apellido: "Lopez", curso: "ReactJs" },
      { ci: 654321, nombre: "Jose", apellido: "Monje", curso: "Flutter" }
    ];
    this.cursos = ['Angular', 'Nodejs', 'ReactJs', 'VueJs', 'MongoDB', 'Flutter'];
  }

  public getAlumnos = (): Array<Alumno> => this.alumnos;
  public getAlumno = (i: number): Alumno => this.alumnos[i];
  public addAlumno = (a: Alumno): void => { this.alumnos.push(a); };
  public setAlumno = (a: Alumno, i: number): void => { this.alumnos[i] = a; };
  public deleteAlumno = (i: number): void => { this.alumnos.splice(i, 1); };

  public getCurso = (i: number): string => this.cursos[i];
  public getCursos = (): Array<string> => this.cursos;
}

interface Alumno {
  ci: number,
  nombre: string,
  apellido: string,
  curso: string
}
