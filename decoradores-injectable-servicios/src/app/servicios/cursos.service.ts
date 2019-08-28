import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../modelos/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  URL_API: string = 'http://192.168.0.115:3000/api-cognos/cursos';

  constructor(private http: HttpClient) { }

  obtenerRegistros() {
    return this.http.get(this.URL_API);
  }
  nuevoRegistro(curso: Curso) {
    return this.http.post(this.URL_API, curso);
  }
  modificarRegistro(curso: Curso) {
    return this.http.put(`${this.URL_API}/${curso.id}`, curso);
  }
  eliminarRegistro(id: Number) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
