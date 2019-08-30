import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent implements OnInit {

  alumnoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    direccion: new FormGroup({
      calle: new FormControl(''),
      zona: new FormControl(''),
      ciudad: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  revert() {
    this.alumnoForm.reset();
  }

  onSubmit() {
    if (this.alumnoForm.invalid) {
      return;
    }
  }

  actualizarAlumno() {
    this.alumnoForm.patchValue({
      nombre: 'Marco',
      apellido: 'Vargas',
      direccion: {
        calle: 'av. Arce #4200',
        zona: 'Sopocachi',
        ciudad: 'La Paz'
      }
    });
  }

}
