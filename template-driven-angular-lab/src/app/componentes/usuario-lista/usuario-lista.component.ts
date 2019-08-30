import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {
  usuarios: Usuario[];
  usuario: Usuario;
  esInfo = false;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.cargarUsuarios();
  }
  cargarUsuarios() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(result => {
      this.usuarios = result as Usuario[];
    });
  }
  verInfo(usuario: Usuario) {
    this.esInfo = true;
    this.usuario = usuario;
  }
}
