import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { ComplatedOrderRoutingModule } from './complated-order-routing';
import { ComplatedOrderComponent } from './complated-order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { NewOrderDetail } from '../model/new-order-detail';



@NgModule({
  declarations: [ComplatedOrderComponent],
  imports: [CommonModule, ComplatedOrderRoutingModule,Ng2SmartTableModule,FormsModule],
  exports: [ComplatedOrderComponent],
  providers:[NewOrderDetail]
})
export class ComplatedOrderModule {
}