import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { UncompleteOrderRoutingModule } from './uncomplete-order-routing';
import { UncompleteOrderComponent } from './uncomplete-order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [UncompleteOrderComponent],
  imports: [CommonModule, UncompleteOrderRoutingModule,Ng2SmartTableModule],
  exports: [UncompleteOrderComponent]
})
export class UncompleteOrderModule {
}