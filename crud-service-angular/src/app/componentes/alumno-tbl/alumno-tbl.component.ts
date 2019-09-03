import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
@Component({
  selector: 'app-alumno-tbl',
  templateUrl: './alumno-tbl.component.html',
  styleUrls: ['./alumno-tbl.component.css']
})
export class AlumnoTblComponent implements OnInit {

  @Input() alumnos: Alumno[];
  @Output() editarAlumno = new EventEmitter<Alumno>();
  @Output() eliminarAlumno = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  editar(alumno: Alumno) {
    this.editarAlumno.emit(alumno);
  }
  
  eliminar(id: number) {
    this.eliminarAlumno.emit(id);
  }
}