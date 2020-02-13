import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { NewOrderRoutingModule } from './new-order-routing';
import { NewOrderComponent } from './new-order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { NewOrderDetail } from '../getNewOrderDetail/new-order-detail';
import { NgxBarcodeModule } from 'ngx-barcode';



@NgModule({
  declarations: [NewOrderComponent],
  imports: [CommonModule, NewOrderRoutingModule,Ng2SmartTableModule,NgxBarcodeModule, FormsModule],
  exports: [NewOrderComponent],
  providers:[NewOrderDetail]
})
export class NewOrderModule {
}