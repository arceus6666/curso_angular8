import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Nota } from './../../modelo/nota';
import { NotaService } from 'src/app/servicio/nota.service';
@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit, OnDestroy {
  nota: Nota;
  private _docSub: Subscription;
  constructor(private notaServicio: NotaService) { }
  ngOnInit() {
    this._docSub = this.notaServicio.notaActual.pipe(
      startWith({
        id: '', doc: 'Seleccione una nota existente o cree una nueva para empesar'
      })
    ).subscribe(resp => {
      this.nota = resp;
    });
  }
  ngOnDestroy() {
    this._docSub.unsubscribe();
  }
  editarNota() {
    this.notaServicio.editarNota(this.nota);
  }
}