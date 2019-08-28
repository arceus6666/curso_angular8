import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { RestData } from 'src/app/modelos/restdata';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumno: Alumno;
  alumnos: Alumno[];

  constructor(
    private alumnosServicio: AlumnosService
  ) { }

  ngOnInit() {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.alumnosServicio.obtenerRegistros().subscribe((resp: Array<Alumno>) => {
      // console.log(resp)
      // this.alumnos = resp.datos;
      this.alumnos = resp;
    }, err => { console.log(err) });
  }

}
