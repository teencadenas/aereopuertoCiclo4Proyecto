import {Component, OnInit} from '@angular/core';
import {AereopuertoModelo} from 'src/app/modelos/aereopuerto.modelo';
import {AereopuertoService} from 'src/app/servicios/aereopuerto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private aereopuertoService: AereopuertoService) { }

  listado: AereopuertoModelo[] = []

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.aereopuertoService.getAll().subscribe((data: AereopuertoModelo[]) => {
      this.listado = data
      console.log(data)
    })
  }

  delete(id?: any) {
    console.log(id)
    Swal.fire({
      title: '¿Esta seguro de eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Acpetar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.aereopuertoService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }
}
