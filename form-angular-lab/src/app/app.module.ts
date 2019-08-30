import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormAlumnoComponent } from './componentes/form-alumno/form-alumno.component';
import { RegistroAlumnoComponent } from './componentes/registro-alumno/registro-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAlumnoComponent,
    RegistroAlumnoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
