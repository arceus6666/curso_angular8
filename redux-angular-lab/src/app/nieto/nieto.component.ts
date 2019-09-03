import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from '../app.reducer';
@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  contador: number;
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador
    });
  }
  reset() {
    const accion: Action = {
      type: 'RESET'
    }
    this.store.dispatch(accion);
  }
}