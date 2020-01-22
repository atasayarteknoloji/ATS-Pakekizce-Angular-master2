import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UncomplateOrderComponent } from './uncomplate-order.component';


const routes: Routes = [{
  path: '',
  component: UncomplateOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UncomplateOrderRoutingModule {
}
