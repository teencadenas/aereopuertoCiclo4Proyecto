import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {GetComponent} from './get/get.component';

const routes: Routes = [
  {
    path: 'create/aereopuertos',
    component: CreateComponent,
  }, {
    path: 'edit/aereopuertos',
    component: EditComponent,
  }, {
    path: 'get/aereopuertos',
    component: GetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AereopuertosRoutingModule { }
