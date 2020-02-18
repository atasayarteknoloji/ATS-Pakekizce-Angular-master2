import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { TurnDyehouseComponent } from './turn-dyehouse.component';
import { TurnDyehouseRoutingModule } from './turn-dyehouse-routing';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [TurnDyehouseComponent],
  imports: [CommonModule,TurnDyehouseRoutingModule,FormsModule,Ng2SmartTableModule],
  exports: [TurnDyehouseComponent]
})
export class TurnDyehouseModule {
}