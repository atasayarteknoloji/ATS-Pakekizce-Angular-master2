import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { OrderRoutingModule } from './order-routing';
import { OrderComponent } from './order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewOrderModule } from './getNewOrder/new-order.module';
import { UncomplateOrderModule } from './getInprogressOrder/uncomplate-order.module';
import { ComplatedOrderModule } from './getComplatedOrder/complated-order.module';


@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, OrderRoutingModule,Ng2SmartTableModule, NewOrderModule,UncomplateOrderModule,ComplatedOrderModule],
  exports: [OrderComponent]
})
export class OrderModule {
}