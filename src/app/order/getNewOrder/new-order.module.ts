import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { NewOrderRoutingModule } from './new-order-routing';
import { NewOrderComponent } from './new-order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OrderComponent } from '../order.component';
import { OrderModule } from '../order.module';
import { FormsModule } from '@angular/forms';
import { NewOrderDetail } from '../getNewOrderDetail/new-order-detail';



@NgModule({
  declarations: [NewOrderComponent],
  imports: [CommonModule, NewOrderRoutingModule,Ng2SmartTableModule,FormsModule],
  exports: [NewOrderComponent],
  providers:[NewOrderDetail]
})
export class NewOrderModule {
}