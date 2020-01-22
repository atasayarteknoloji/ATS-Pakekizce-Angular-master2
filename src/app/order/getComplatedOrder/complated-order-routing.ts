import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ComplatedOrderComponent } from './complated-order.component';


const routes: Routes = [{
  path: '',
  component: ComplatedOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplatedOrderRoutingModule {
}
