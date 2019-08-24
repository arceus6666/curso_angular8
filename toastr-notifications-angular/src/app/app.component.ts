import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toastr-notifications-angular';
  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Se actualizo con correcto', 'ok', { timeOut: 2000 })
  }

  showError() {
    this.toastr.error('se se pudo actualizar', 'error', { timeOut: 3000 })
  }

  showExito() {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Acceso con exito',
      showConfirmButton: false,
      timer: 1500
    })
  }

  showPregunta() {
    Swal.fire({
      title: 'Registrar alumno ?',
      text: `Alumnos Ana Gomez`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff9933',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.value) {
        this.toastr.success('Proceso completado ...', 'Solicitud', {
          timeOut: 2000
        });
      }
    });
  }


  showProcesando() {
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Cargando datos ...'
    })
    Swal.showLoading()
    setTimeout(() => { Swal.close() }, 3000)
  }
}
