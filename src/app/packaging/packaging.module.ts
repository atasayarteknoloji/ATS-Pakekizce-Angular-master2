import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { PackagingComponent } from './packaging.component';
@NgModule({
  declarations: [PackagingComponent],
  imports: [CommonModule],
  exports: [PackagingComponent]
})
export class PackagingModule {
}