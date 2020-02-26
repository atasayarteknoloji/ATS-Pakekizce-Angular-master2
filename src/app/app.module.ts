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
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewOrderDetailModule } from './order/getNewOrderDetail/new-order-detail.module';;
import { OrderModule } from './order/order.module';
import { NewOrderModule } from './order/getNewOrder/new-order.module';
import { PrintComponent } from './components/print/print.component';
import { ToDyehouseModule } from './dyehouse/to-dyehouse/to-dyehouse.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UncomplateOrderModule } from './order/getInprogressOrder/uncomplate-order.module';
import { RegisterComponent } from './register/register.component';
import { BarcodeComponent } from './barcode/barcode.component'
import { TurnDyehouseModule } from './dyehouse/turn-dyehouse/turn-dyehouse.module';
import { NgxBarcodeModule } from 'ngx-barcode';
import { PackagingModule } from './packaging/packaging.module';
import { ComplatedOrderModule } from './order/getComplatedOrder/complated-order.module';;
import { ButtonViewComponent } from './components/button-view/button-view.component'



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
    UncomplateOrderModule,
    OrderModule,
    NewOrderModule,
    FormsModule,
    ToDyehouseModule,
    TurnDyehouseModule,
    NewOrderDetailModule,
    Ng2SearchPipeModule,
    NgxBarcodeModule,
    PackagingModule,
    ComplatedOrderModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    CreateRequestComponent,
    SidebarComponent,
    NavbarComponent,
    PrintComponent,
    RegisterComponent,
    BarcodeComponent,
    ButtonViewComponent
  ],
  entryComponents:[
    ButtonViewComponent
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
