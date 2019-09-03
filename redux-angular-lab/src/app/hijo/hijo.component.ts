import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducer';
import { Store, Action } from '@ngrx/store';
@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  contador: number;
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador
    });
  }
  multiplicar() {
    const accion: Action = {
      type: 'MULTIPLICAR'
    }
    this.store.dispatch(accion);
  }
  dividir() {
    const accion: Action = {
      type: 'DIVIDIR'
    }
    this.store.dispatch(accion);
  }
}