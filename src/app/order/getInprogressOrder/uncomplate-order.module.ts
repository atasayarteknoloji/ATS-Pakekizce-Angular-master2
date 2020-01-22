import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { UncomplateOrderRoutingModule } from './uncomplate-order-routing';
import { UncomplateOrderComponent } from './uncomplate-order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [UncomplateOrderComponent],
  imports: [CommonModule, UncomplateOrderRoutingModule,Ng2SmartTableModule],
  exports: [UncomplateOrderComponent]
})
export class UncomplateOrderModule {
}