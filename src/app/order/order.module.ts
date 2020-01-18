import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { OrderRoutingModule } from './order-routing';
import { OrderComponent } from './order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewOrderModule } from './getNewOrder/new-order.module';
import { UncompleteOrderModule } from './getInprogressOrder/uncomplete-order.module';
import { TableFilterPipe } from './table-filter/table-filter.pipe';
import { NewOrderComponent } from './getNewOrder/new-order.component';
import { NewOrderDetailComponent } from './getNewOrderDetail/new-order-detail.component';



@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, OrderRoutingModule,Ng2SmartTableModule, NewOrderModule,UncompleteOrderModule],
  exports: [OrderComponent]
})
export class OrderModule {
}