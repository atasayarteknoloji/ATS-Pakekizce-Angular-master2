import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { PackagingComponent } from './packaging.component';
import { PackagingRoutingModule } from './packaging.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  declarations: [PackagingComponent],
  imports: [CommonModule,PackagingRoutingModule,Ng2SmartTableModule],
  exports: [PackagingComponent]
})
export class PackagingModule {
}