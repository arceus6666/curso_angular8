import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() contador;
  @Output() contadorCambio = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  reset() {
    // this.contador = 0;
    // this.cambioContador.emit(this.contador);
    this.contadorCambio.emit(0);
  }

}
