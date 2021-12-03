import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AereopuertosRoutingModule} from './aereopuertos-routing.module';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {GetComponent} from './get/get.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    AereopuertosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AereopuertosModule { }
