import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { TurnDyehouseComponent } from './turn-dyehouse.component';
import { TurnDyehouseRoutingModule } from './turn-dyehouse-routing';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TurnDyehouseComponent],
  imports: [CommonModule,TurnDyehouseRoutingModule,FormsModule],
  exports: [TurnDyehouseComponent]
})
export class TurnDyehouseModule {
}