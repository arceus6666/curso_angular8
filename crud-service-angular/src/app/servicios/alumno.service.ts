import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { HttpClient } from '@angular/common/http';
import { Alumno } from '../modelos/alumno';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  URL_API = 'http://192.168.0.107:3001/api-cognos/alumnos';

  alumno = this.socket.fromEvent<Alumno>('alumno')
  alumnos = this.socket.fromEvent<Alumno[]>('alumnos');

  constructor(private http: HttpClient, private socket: Socket) { }

  leerAlumnos() {
    this.socket.emit('getAll')
    // return this.http.get(this.URL_API);
  }

  crearAlumno(alumno: Alumno) {
    this.socket.emit('add', alumno)
    // return this.http.post(this.URL_API, alumno);
  }

  modificarAlumno(alumno: Alumno) {
    this.socket.emit('mod', alumno)
    // return this.http.put(`${this.URL_API}/${alumno.id}`, alumno);
  }

  eliminarAlumno(id: Number) {
    this.socket.emit('del', id)
    // return this.http.delete(`${this.URL_API}/${id}`);
  }
}