import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AereopuertoModelo} from 'src/app/modelos/aereopuerto.modelo';
import {AereopuertoService} from 'src/app/servicios/aereopuerto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private aereopuertoService: AereopuertoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  fgValidacion = this.fb.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    coordx: ['', [Validators.required]],
    coordy: ['', [Validators.required]],
    siglas: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
  });

  id: string = ''

  buscarRegistro(id: string) {
    this.aereopuertoService.getWithId(id).subscribe((data: AereopuertoModelo) => {
      console.log(data)
      this.fgValidacion.controls["id"].setValue(id)
      this.fgValidacion.controls["nombre"].setValue(data.nombre)
      this.fgValidacion.controls["ciudad"].setValue(data.ciudad)
      this.fgValidacion.controls["pais"].setValue(data.pais)
      this.fgValidacion.controls["coordx"].setValue(data.coordx)
      this.fgValidacion.controls["coordy"].setValue(data.coordy)
      this.fgValidacion.controls["siglas"].setValue(data.siglas)
      this.fgValidacion.controls["tipo"].setValue(data.tipo)
    })
  }

  edit() {
    let aereopuerto = new AereopuertoModelo();
    aereopuerto.id = this.fgValidacion.controls["id"].value;
    aereopuerto.nombre = this.fgValidacion.controls["nombre"].value;
    aereopuerto.ciudad = this.fgValidacion.controls["ciudad"].value;
    aereopuerto.pais = this.fgValidacion.controls["pais"].value;
    aereopuerto.coordx = this.fgValidacion.controls["coordx"].value;
    aereopuerto.coordy = this.fgValidacion.controls["coordy"].value;
    aereopuerto.siglas = this.fgValidacion.controls["siglas"].value;
    aereopuerto.tipo = this.fgValidacion.controls["tipo"].value;

    this.aereopuertoService.update(aereopuerto).subscribe((data: AereopuertoModelo) => {
      Swal.fire('Editado Correctamente!', '', 'success')
      this.router.navigate(['/admin/get']);
    },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.buscarRegistro(this.id);
  }

}
