import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UncompleteOrderComponent } from './uncomplete-order.component';


const routes: Routes = [{
  path: '',
  component: UncompleteOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UncompleteOrderRoutingModule {
}
