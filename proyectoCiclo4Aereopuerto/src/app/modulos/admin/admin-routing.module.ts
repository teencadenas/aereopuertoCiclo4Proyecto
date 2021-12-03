import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './usuarios/create/create.component';
import {EditComponent} from './usuarios/edit/edit.component';
import {GetComponent} from './usuarios/get/get.component';


const routes: Routes = [
  {
    path: 'create/usuario',
    component: CreateComponent,
  }, {
    path: 'edit/:id',
    component: EditComponent,
  }, {
    path: 'get/usuario',
    component: GetComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
