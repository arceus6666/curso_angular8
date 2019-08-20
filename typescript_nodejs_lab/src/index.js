var Saludo = /** @class */ (function () {
    function Saludo(mensaje) {
        this.texto = mensaje;
    }
    Saludo.prototype.saludar = function () {
        return this.texto;
    };
    return Saludo;
}());
var saludo = new Saludo("Hola Mundo!");
// console.log(saludo.saludar());
var factorial = function (num) {
    if (num <= 0)
        return 1;
    else
        return (num * factorial(num - 1));
};
var alumno;
alumno = {
    nombres: 'ana',
    apellido: 'gomez',
    edad: 25,
    estado: true
};
console.log('alumno:', alumno);
var alumnos = [];
alumnos.push(alumno);
alumnos.push({ nombres: 'jorge', apellido: 'chavez', edad: 30, estado: true });
alumnos.push({ nombres: 'abel', apellido: 'lopez', edad: 27, estado: true });
alumnos.forEach(function (a) {
    console.log('alumno:', a);
});
