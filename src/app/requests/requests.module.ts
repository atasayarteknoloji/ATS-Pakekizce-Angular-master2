import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RequestsComponent} from './requests.component';
import {RequestsRoutingModule} from './requests-routing.module';


@NgModule({
  declarations: [RequestsComponent],
  imports: [CommonModule, RequestsRoutingModule, FormsModule]
})
export class RequestsModule {
}
