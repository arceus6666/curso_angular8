import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() contador;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    this.cambioContador.emit(this.contador * 2);
  }

  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    this.cambioContador.emit(this.contador / 2);
  }

  resetNieto(nuevoContador: number) {
    // this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
    this.cambioContador.emit(nuevoContador);
  }

}
