import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {GetComponent} from './get/get.component';
import {RutasRoutingModule} from './rutas-routing.module';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    RutasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RutasModule { }
