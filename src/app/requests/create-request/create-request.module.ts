import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CreateRequestComponent} from './create-request.component';
import {CreateRequestRoutingModule} from './create-request-routing.module';


@NgModule({
  declarations: [CreateRequestComponent],
  imports: [CommonModule, CreateRequestRoutingModule],
  exports: [CreateRequestComponent]
})
export class CreateRequestModule {
}
