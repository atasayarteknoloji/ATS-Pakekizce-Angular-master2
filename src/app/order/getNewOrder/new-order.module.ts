import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { NewOrderRoutingModule } from './new-order-routing';
import { NewOrderComponent } from './new-order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TableFilterPipe } from '../table-filter.pipe';
import { OrderComponent } from '../order.component';
import { OrderModule } from '../order.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewOrderComponent],
  imports: [CommonModule, NewOrderRoutingModule,Ng2SmartTableModule,FormsModule],
  exports: [NewOrderComponent]
})
export class NewOrderModule {
}