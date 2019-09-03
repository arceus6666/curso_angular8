import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from './app.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;
  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }
  incrementar() {
    const accion: Action = {
      type: 'INCREMENTAR'
    }
    this.store.dispatch(accion);
  }
  decrementar() {
    const accion: Action = {
      type: 'DECREMENTAR'
    }
    this.store.dispatch(accion);
  }

}
