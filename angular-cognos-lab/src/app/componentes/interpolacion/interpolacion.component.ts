import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  alumno: Alumno = new Alumno();
  curso: string = 'Angular 8';

  constructor() { }

  ngOnInit() {
    this.registrar();
  }

  registrar() {
    this.alumno = {
      doc_identidad: 123456,
      nombres: 'Ana',
      apellidos: 'Gomes',
      email: 'ana.gomez@test.com'
    }
  }

  generaNumero() {
    const numero: number = 123;
    return numero;
  }

}
