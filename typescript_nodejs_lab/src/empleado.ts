export default class Empleado {
  
  codigo: number;
  nombres: string;
  
  constructor(codigo: number, nombres: string) {
    this.codigo = codigo;
    this.nombres = nombres;
  }
  
  getSalario(): number {
    return 2500;
  }
}
