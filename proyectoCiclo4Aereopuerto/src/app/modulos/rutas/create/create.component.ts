import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AereopuertoModelo} from 'src/app/modelos/aereopuerto.modelo';
import {RutaModelo} from 'src/app/modelos/ruta.modelo';
import {RutaService} from 'src/app/servicios/ruta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  aeropuertoService: any;

  constructor(
    private fb: FormBuilder,
    private rutaService: RutaService,
    private router: Router,
    private AeropuertoModelo: AereopuertoModelo
  ) { }

  listadoAeropuertos: AereopuertoModelo[] = []

  fgValidacion = this.fb.group({
    tiempoEstimado: ['', [Validators.required]],
    origen: ['', [Validators.required]],
    destino: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.getAllAeropuertos()
  }

  store() {
    let ruta = new RutaModelo();
    ruta.tiempoEstimado = this.fgValidacion.controls["tiempoEstimado"].value;
    ruta.origen = this.fgValidacion.controls["origen"].value;
    ruta.destino = this.fgValidacion.controls["destino"].value;

    this.rutaService.store(ruta).subscribe((data: RutaModelo) => {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/admin/get']);
    },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
  }

  getAllAeropuertos() {
    this.aeropuertoService.getAll().subscribe((data: AereopuertoModelo[]) => {
      this.listadoAeropuertos = data
      console.log(data)
    })
  }

}
