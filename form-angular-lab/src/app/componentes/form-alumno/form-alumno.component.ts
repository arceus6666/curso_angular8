import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  nombre = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  actualizarNombre(){
    this.nombre.setValue('Ana Gomez')
  }

}
