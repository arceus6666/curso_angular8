export class Alumno {

  public id: number;
  public nombre_completo: string;
  public identidad: string;

  constructor(id: number = 0, nombre_completo: string = '', identidad: string = '') {
    this.id = id;
    this.nombre_completo = nombre_completo;
    this.identidad = identidad;
  }
  
}