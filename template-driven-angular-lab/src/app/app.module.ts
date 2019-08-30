import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioFrmComponent } from './componentes/usuario-frm/usuario-frm.component';
import { UsuarioListaComponent } from './componentes/usuario-lista/usuario-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioFrmComponent,
    UsuarioListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
