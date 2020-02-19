import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PrintComponent } from './print.component';


const routes: Routes = [{
  path: '',
  component: PrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintRoutingModule {
}
