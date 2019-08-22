import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolacionComponent } from './componentes/interpolacion/interpolacion.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { DirectivasComponent } from './componentes/directivas/directivas.component';
import { CompParametrosComponent } from './componentes/comp-parametros/comp-parametros.component';
import { CompEventosComponent } from './componentes/comp-eventos/comp-eventos.component';


const routes: Routes = [
  {
    path: 'interpolacion', component: InterpolacionComponent,
  },
  {
    path: 'eventos', component: EventosComponent
  },
  {
    path: 'directivas', component: DirectivasComponent
  },
  {
    path: 'comp-parametros', component: CompParametrosComponent
  },
  {
    path: 'comp-eventos', component: CompEventosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
