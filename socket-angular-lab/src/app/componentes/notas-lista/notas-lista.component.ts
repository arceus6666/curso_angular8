import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NotaService } from 'src/app/servicio/nota.service';
@Component({
  selector: 'app-notas-lista',
  templateUrl: './notas-lista.component.html',
  styleUrls: ['./notas-lista.component.css']
})
export class NotasListaComponent implements OnInit, OnDestroy {
  notas: Observable<string[]>;
  idActual: string;
  private _docSub: Subscription;
  constructor(private notaServicio: NotaService) { }
  ngOnInit() {
    this.notas = this.notaServicio.notas;
    this._docSub = this.notaServicio.notaActual.subscribe(resp => {
      this.idActual = resp.id;
    });
  }
  ngOnDestroy() {
    this._docSub.unsubscribe();
  }
  cargarNota(id: string) {
    this.notaServicio.obtenerNota(id);
  }
  nuevaNota() {
    this.notaServicio.nuevaNota();
  }
}