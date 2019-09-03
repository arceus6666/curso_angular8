import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './servicios/alumno.service';
import { Alumno } from './modelos/alumno';
import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  alumnos: Observable<Alumno[]>;
  alumno: Alumno;
  responde: { message: string };
  esNuevo = true;
  private _alSub: Subscription;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.obtenerAlumnos();
    this.responde = { message: '' };
    this.alumno = new Alumno();
  }

  obtenerAlumnos() {
    // this.alumnoService.leerAlumnos().subscribe(res => {
    //   this.alumnos = res as Alumno[];
    // });
    this.alumnos = this.alumnoService.alumnos;
    this._alSub = this.alumnoService.alumno.subscribe(res => {
      this.alumno = res
    })
  }

  registrarAlumno(alumno) {
    this.alumnoService.crearAlumno(alumno)
    // .subscribe(res => {
    //   this.responde = res as { message: string };
    //   this.obtenerAlumnos();
    // });
  }

  modificarAlumno(alumno) {
    this.alumno = alumno;
    this.esNuevo = false;
  }

  guardarAlumno(alumno) {
    this.alumnoService.modificarAlumno(alumno)
    // .subscribe(res => {
    //   this.responde = res as { message: string };
    //   this.obtenerAlumnos();
    // });
    this.esNuevo = true;
  }

  eliminarAlumno(id: number) {
    if (confirm('Eliminar ?')) {
      console.log(id)
      this.alumnoService.eliminarAlumno(id)
      // .subscribe(res => {
      //   this.responde = res as { message: string };
      //   this.obtenerAlumnos();
      // });
    }
  }
}