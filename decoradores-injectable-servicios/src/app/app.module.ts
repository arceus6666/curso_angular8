import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    ListaCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
