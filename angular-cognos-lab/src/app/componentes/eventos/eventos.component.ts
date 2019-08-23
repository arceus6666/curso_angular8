import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  numero: number = 0;
  rutaImagen: string;

  constructor() { }

  ngOnInit() {
  }

  generarAleatorio() {
    this.numero = Math.trunc(Math.random() * 10) + 1;
  }

  incrementar() {
    this.numero++;
  }

  decrementar() {
    this.numero--;
  }

}
