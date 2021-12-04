import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AereopuertoModelo} from 'src/app/modelos/aereopuerto.modelo';
import {AereopuertoService} from 'src/app/servicios/aereopuerto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private aereopuertoService: AereopuertoService,
    private router: Router
  ) { }

  fgValidacion = this.fb.group({
    nombre: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    coordx: ['', [Validators.required]],
    coordy: ['', [Validators.required]],
    siglas: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
  });

  ngOnInit(): void { }

  store() {
    let aereopuerto = new AereopuertoModelo();
    aereopuerto.nombre = this.fgValidacion.controls["nombre"].value;
    aereopuerto.ciudad = this.fgValidacion.controls["ciudad"].value;
    aereopuerto.pais = this.fgValidacion.controls["pais"].value;
    aereopuerto.coordx = this.fgValidacion.controls["coordx"].value;
    aereopuerto.coordy = this.fgValidacion.controls["coordy"].value;
    aereopuerto.siglas = this.fgValidacion.controls["siglas"].value;
    aereopuerto.tipo = this.fgValidacion.controls["tipo"].value;

    this.aereopuertoService.store(aereopuerto).subscribe((data: AereopuertoModelo) => {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/admin/get']);
    },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
  }

}
