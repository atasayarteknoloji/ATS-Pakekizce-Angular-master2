import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TurnDyehouseComponent } from './turn-dyehouse.component';


const routes: Routes = [{
  path: '',
  component: TurnDyehouseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnDyehouseRoutingModule {
}
