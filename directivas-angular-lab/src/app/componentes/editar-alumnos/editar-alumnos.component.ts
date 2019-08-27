import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-editar-alumnos',
  templateUrl: './editar-alumnos.component.html',
  styleUrls: ['./editar-alumnos.component.css']
})
export class EditarAlumnosComponent implements OnInit {

  alumno: Alumno;
  alumnos: Alumno[];
  cursos: string[];
  editar: boolean;
  memo: Alumno;
  selected: number;

  constructor(
    private _service: DataService
  ) { }

  ngOnInit() {
    this.cargarCursos();
    this.cargarAlumnos();
    this.editar = false;
    this.memo = this._service.getAlumno(0);
    this.selected = -1;
  }

  cargarCursos() {
    this.cursos = this._service.getCursos();
  }

  cargarAlumnos() {
    this.alumnos = this._service.getAlumnos();
    // this.selected = this.alumnos.length;
  }

  edit(index) {
    this.memo = this._service.getAlumno(index);
    this.editar = true;
    this.selected = index;
    console.log(this.selected)
  }

  guardar(index) {
    this._service.setAlumno(this.memo, index);
    this.editar = false;
  }

  borrar(index) {
    this._service.deleteAlumno(index);
  }

}

interface Alumno {
  ci: number,
  nombre: string,
  apellido: string,
  curso: string
}