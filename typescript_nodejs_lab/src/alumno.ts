class Persona {
  codigo: number;
  nombres: string;

  constructor(codigo: number, nombres: string) {
    this.codigo = codigo;
    this.nombres = nombres;
  }
}

class Alumno extends Persona {
  matricula: number;

  constructor(matricula: number, codigo: number, nombres: string) {
    super(codigo, nombres);
    this.matricula = matricula;
  }

  verRegistro():void{
    console.log(` ${this.nombres}, matricula : ${this.matricula} `);
  }
}

export default Alumno;
