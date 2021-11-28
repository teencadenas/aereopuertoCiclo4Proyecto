import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {GetComponent} from './get/get.component';
import {VuelosRoutingModule} from './vuelos-routing.module';






@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    VuelosRoutingModule
  ]
})
export class VuelosModule { }
