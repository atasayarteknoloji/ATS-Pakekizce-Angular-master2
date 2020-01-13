import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NewOrderDetailComponent } from './new-order-detail.component';


const routes: Routes = [{
  path: '',
  component: NewOrderDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewOrderDetailRoutingModule {
}
