import {Component, OnInit} from '@angular/core';
import {VueloModelo} from 'src/app/modelos/vuelo.modelo';
import {VueloService} from 'src/app/servicios/vuelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private vuelosService: VueloService) { }

  listado: VueloModelo[] = []

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.vuelosService.getAll().subscribe((data: VueloModelo[]) => {
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
        this.vuelosService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }
}
