import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './componentes/interpolacion/interpolacion.component';
import { CompParametrosComponent } from './componentes/comp-parametros/comp-parametros.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { DirectivasComponent } from './componentes/directivas/directivas.component';
import { CompEventosComponent } from './componentes/comp-eventos/comp-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    CompParametrosComponent,
    EventosComponent,
    DirectivasComponent,
    CompEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
