import { Component } from '@angular/core';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public alumnoArray: Array<Alumno> = [
    new Alumno(1, 'Marcelo Moscoso', '4545458'),
    new Alumno(2, 'Ana Gomez', '7878789'),
    new Alumno(3, 'Jorge Valquez', '2323238'),
  ];

  private curId = 3;
  public selectedAlumno: Alumno = new Alumno();

  public openForEdit = (alumno: Alumno): void => {
    this.selectedAlumno = alumno;
  }

  public addOrEdit = (): void => {
    if (this.selectedAlumno.id === 0) {
      // this.selectedAlumno.id = this.alumnoArray.length + 1;
      this.selectedAlumno.id = ++this.curId;
      this.alumnoArray.push(this.selectedAlumno);
    }

    this.selectedAlumno = new Alumno();
  }

  public delete = (): void => {
    if (confirm('Are you sure you want to delete it?')) {
      this.alumnoArray = this.alumnoArray.filter(a => a != this.selectedAlumno);
      this.selectedAlumno = new Alumno();
    }
  }

}
