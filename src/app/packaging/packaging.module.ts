import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PackagingComponent } from './packaging.component';




@NgModule({
  declarations: [PackagingComponent],
  imports: [CommonModule,FormsModule],
  exports: [PackagingComponent]
})
export class PackagingModule {
}