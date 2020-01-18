import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// used to create fake backend
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app.routing';
import { CreateRequestComponent } from './requests/create-request';
import { NewOrderComponent } from './order/getNewOrder/new-order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewOrderDetailComponent } from './order/getNewOrderDetail/new-order-detail.component';
import { NewOrderDetailModule } from './order/getNewOrderDetail/new-order-detail.module';;
import { UncompleteOrderComponent } from './order/getInprogressOrder/uncomplete-order.component'
import { UncompleteOrderModule } from './order/getInprogressOrder/uncomplete-order.module';;
import { OrderComponent } from './order/order.component'
import { OrderModule } from './order/order.module';
import { NewOrderModule } from './order/getNewOrder/new-order.module';
import { TableFilterPipe } from './order/table-filter/table-filter.pipe';
import { PrintComponent } from './components/print/print.component';
import { ToDyehouseComponent } from './dyehouse/to-dyehouse/to-dyehouse.component';
import { TurnDyehouseComponent } from './dyehouse/turn-dyehouse/turn-dyehouse.component';
import { ToDyehouseModule } from './dyehouse/to-dyehouse/to-dyehouse.module';
import { ToDyehouseRoutingModule } from './dyehouse/to-dyehouse/to-dyehouse-routing';




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    Ng2SmartTableModule,
    NewOrderDetailModule,
    UncompleteOrderModule,
    OrderModule,
    NewOrderModule,
    FormsModule,
    ToDyehouseModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    CreateRequestComponent,
    SidebarComponent,
    NavbarComponent,
    TableFilterPipe,
    PrintComponent,
    TurnDyehouseComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
