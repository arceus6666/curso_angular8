import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../modelos/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  URL_API: string = 'http://192.168.0.115:3000/api-cognos/alumnos';
  constructor(private http: HttpClient) { }
  obtenerRegistros() {
    return this.http.get(this.URL_API);
  }
  nuevoRegistro(alumno: Alumno) {
    return this.http.post(this.URL_API, alumno);
  }
  modificarRegistro(alumno: Alumno) {
    return this.http.put(`${this.URL_API}/${alumno.id}`, alumno);
  }
  eliminarRegistro(id: Number) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }

}
