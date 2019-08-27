import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {

  alumno: Alumno;
  alumnos: Alumno[];
  cursos: string[];

  constructor(
    private _service: DataService
  ) { }

  ngOnInit() {
    this.cargarCursos();
    this.cargarAlumnos();
  }

  cargarCursos() {
    this.cursos = this._service.getCursos();
  }

  cargarAlumnos() {
    this.alumnos = this._service.getAlumnos();
  }

  search(data: string) {
    console.log(data)
    this.alumnos = (data === null || data == '' || typeof data === 'undefined') ?
      this._service.getAlumnos() :
      this.alumnos.filter(a => a.nombre.toLowerCase().match(`^.*${data.toLowerCase()}.*$`));

  }

  reset() {
    this.cargarAlumnos();
  }
}

interface Alumno {
  ci: number,
  nombre: string,
  apellido: string,
  curso: string
}