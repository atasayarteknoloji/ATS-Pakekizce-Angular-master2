import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ToDyehouseComponent } from './to-dyehouse.component';


const routes: Routes = [{
  path: '',
  component: ToDyehouseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDyehouseRoutingModule {
}
