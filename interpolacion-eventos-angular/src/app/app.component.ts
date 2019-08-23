import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interpolacion-eventos-angular';
  a: number;
  b: number;
  c: number;

  resultado: string = 'presiona el boton';

  frutas: Array<string> = [
    'assets/images/frutas/cereza.png',
    'assets/images/frutas/frambuesa.png',
    'assets/images/frutas/frutilla.png',
    'assets/images/frutas/manzana.png',
    'assets/images/frutas/naranja.png',
    'assets/images/frutas/pinia.png',
    'assets/images/frutas/sandia.png',
    'assets/images/frutas/uva.png'
  ]

  random = () => Math.floor(Math.random() * (8 - 1)) + 1;

  jugar = () => {
    this.a = this.random();
    this.b = this.random();
    this.c = this.random();
    this.resultado = this.a === this.b && this.b === this.c ? 'Gana' : (this.a === this.b || this.b === this.c ? 'Cerca' : 'Pierde');
  }
}
