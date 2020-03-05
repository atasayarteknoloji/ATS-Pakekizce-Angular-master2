import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { OrderRoutingModule } from './order-routing';
import { OrderComponent } from './order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewOrderModule } from './getNewOrder/new-order.module';
import { UncomplateOrderModule } from './getInprogressOrder/uncomplate-order.module';
import { ComplatedOrderModule } from './getComplatedOrder/complated-order.module';
import { GetInprogressOrderDetailComponent } from './get-inprogress-order-detail/get-inprogress-order-detail.component';
import { GetCompletedOrderDetailComponent } from './get-completed-order-detail/get-completed-order-detail.component';


@NgModule({
  declarations: [OrderComponent, GetInprogressOrderDetailComponent, GetCompletedOrderDetailComponent],
  imports: [CommonModule, OrderRoutingModule,Ng2SmartTableModule, NewOrderModule,UncomplateOrderModule,ComplatedOrderModule],
  exports: [OrderComponent]
})
export class OrderModule {
}