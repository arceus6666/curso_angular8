import { Component } from '@angular/core';

interface Alumno {
  ci: number,
  nombres: string,
  apellidos: string,
  curso: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-angular';

  alumno: Alumno = {
    ci: 123456,
    nombres: 'Ana',
    apellidos: 'Gomez',
    curso: 'Angular'
  };

  mensaje: string = '';

  onEnviarMensaje(mensaje: HTMLInputElement): void {
    if (mensaje.value) {
      this.mensaje = mensaje.value;
    }
  }
}
