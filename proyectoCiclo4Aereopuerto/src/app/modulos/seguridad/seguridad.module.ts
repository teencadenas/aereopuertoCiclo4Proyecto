import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CambiarClaveComponent} from './cambiar-clave/cambiar-clave.component';
import {CerrarSesionComponent} from './cerrar-sesion/cerrar-sesion.component';
import {LoginComponent} from './login/login.component';
import {RecuperarClaveComponent} from './recuperar-clave/recuperar-clave.component';
import {SeguridadRoutingModule} from './seguridad-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    CambiarClaveComponent,
    RecuperarClaveComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
