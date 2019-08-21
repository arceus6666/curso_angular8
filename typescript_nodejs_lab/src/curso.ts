class Curso {
  public codigo: number;
  public nombre: string;
  private tipo: string;

  constructor() {
    this.tipo = 'Presencial';
    this.codigo = 0;
    this.nombre = '';
  }

  info(): string {
    return ` codigo : ${this.codigo} - ${this.nombre} - ${this.tipo}`;
  }
}

export default Curso;