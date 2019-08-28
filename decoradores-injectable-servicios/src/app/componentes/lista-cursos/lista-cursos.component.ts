import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/modelos/curso';
import { CursosService } from 'src/app/servicios/cursos.service';
import { RestData } from 'src/app/modelos/restdata';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  curso: Curso;
  cursos: Array<Curso>;

  constructor(
    private cursosServicio: CursosService
  ) { }

  ngOnInit() {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursosServicio.obtenerRegistros().subscribe((resp: Array<Curso>) => {
      // console.log(resp)
      this.cursos = resp;
    }, err => { console.log(err) });
  }


}
