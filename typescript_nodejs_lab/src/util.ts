class Util {
  static monedaNacional = 'BOB';
  static monedaDolarAmericano = 'USD';

  static fechaActual(): string {
    const fecha = new Date();
    const dd = fecha.getDate();
    const mm = fecha.getMonth() + 1;
    const yyyy = fecha.getFullYear();
    let dia: string = '';
    let mes: string = '';
    if (dd < 10) {
      dia = `0${dd}`;
    } else {
      dia = dd.toString();
    }
    if (mm < 10) {
      mes = `0${mm}`;
    } else {
      mes = mm.toString();
    }
    const hoy = `${dia}/${mes}/${yyyy}`;
    return hoy;
  }
}

export default Util;