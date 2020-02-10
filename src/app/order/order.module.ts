import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { OrderRoutingModule } from './order-routing';
import { OrderComponent } from './order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewOrderModule } from './getNewOrder/new-order.module';
import { UncomplateOrderModule } from './getInprogressOrder/uncomplate-order.module';
import { NewOrderComponent } from './getNewOrder/new-order.component';
import { NewOrderDetailComponent } from './getNewOrderDetail/new-order-detail.component';
import { ComplatedOrderComponent } from './getComplatedOrder/complated-order.component';


@NgModule({
  declarations: [OrderComponent, ComplatedOrderComponent],
  imports: [CommonModule, OrderRoutingModule,Ng2SmartTableModule, NewOrderModule,UncomplateOrderModule],
  exports: [OrderComponent]
})
export class OrderModule {
}