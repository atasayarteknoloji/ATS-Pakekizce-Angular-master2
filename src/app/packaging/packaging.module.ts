import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { PackagingComponent } from './packaging.component';
import { PackagingRoutingModule } from './packaging.routing';
@NgModule({
  declarations: [PackagingComponent],
  imports: [CommonModule,PackagingRoutingModule],
  exports: [PackagingComponent]
})
export class PackagingModule {
}