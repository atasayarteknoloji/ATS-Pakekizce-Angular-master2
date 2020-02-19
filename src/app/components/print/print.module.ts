import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { NgxBarcodeModule } from 'ngx-barcode';
import { PrintComponent } from './print.component';
import { PrintRoutingModule } from './print-routing';


@NgModule({
  declarations: [PrintComponent],
  imports: [CommonModule,NgxBarcodeModule,PrintRoutingModule],
  exports: [PrintComponent]
})
export class PrintModule {
}