import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
@Component({
  selector: 'app-alumno-frm',
  templateUrl: './alumno-frm.component.html',
  styleUrls: ['./alumno-frm.component.css']
})
export class AlumnoFrmComponent implements OnInit {

  @Output() crearAlumno = new EventEmitter<Alumno>();
  @Output() guardarAlumno = new EventEmitter<Alumno>();
  @Input() alumno: Alumno;
  @Input() esNuevo: boolean;

  constructor() { }

  ngOnInit() { }

  registrar() {
    if (this.alumno.nombres && this.alumno.apellidos && this.alumno.doc_identidad) {
      this.crearAlumno.emit(this.alumno);
      this.alumno = new Alumno();
    } else {
      alert('ERROR,Campos requeridos');
    }
  }
  
  guardar() {
    if (this.alumno.nombres && this.alumno.apellidos && this.alumno.doc_identidad) {
      this.guardarAlumno.emit(this.alumno);
      this.alumno = new Alumno();
    } else {
      alert('ERROR,Campos requeridos');
    }
  }
}