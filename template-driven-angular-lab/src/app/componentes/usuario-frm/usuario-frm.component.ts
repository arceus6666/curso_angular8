import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-usuario-frm',
  templateUrl: './usuario-frm.component.html',
  styleUrls: ['./usuario-frm.component.css']
})
export class UsuarioFrmComponent implements OnInit {

  usuario = new Usuario();

  constructor() { }

  ngOnInit() {
  }

  registrar() {
    console.log(JSON.stringify(this.usuario));
  }


}
