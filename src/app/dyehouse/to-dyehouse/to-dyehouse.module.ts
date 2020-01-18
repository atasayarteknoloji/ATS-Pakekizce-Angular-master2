import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { ToDyehouseComponent } from './to-dyehouse.component';
import { ToDyehouseRoutingModule } from './to-dyehouse-routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxBarcodeModule } from 'ngx-barcode';


@NgModule({
  declarations: [ToDyehouseComponent],
  imports: [CommonModule,ToDyehouseRoutingModule, Ng2SmartTableModule],
  exports: [ToDyehouseComponent]
})
export class ToDyehouseModule {
}