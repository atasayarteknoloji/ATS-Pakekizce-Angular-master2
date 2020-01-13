import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { NewOrderDetailRoutingModule } from './new-order-detail-routing';
import { NewOrderDetailComponent } from './new-order-detail.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [NewOrderDetailComponent],
  imports: [CommonModule, NewOrderDetailRoutingModule,Ng2SmartTableModule],
  exports: [NewOrderDetailComponent]
})
export class NewOrderDetailModule {
}