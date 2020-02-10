import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { ToDyehouseComponent } from './to-dyehouse.component';
import { ToDyehouseRoutingModule } from './to-dyehouse-routing';



@NgModule({
  declarations: [ToDyehouseComponent],
  imports: [CommonModule,ToDyehouseRoutingModule],
  exports: [ToDyehouseComponent]
})
export class ToDyehouseModule {
}