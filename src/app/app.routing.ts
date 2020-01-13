import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {AdminComponent} from './admin';
import {LoginComponent} from './login';
import {AuthGuard} from './_helpers';
import {Role} from './_models';
import {NgModule} from '@angular/core';
import {ROUTING} from './shared/routing';
import { NewOrderComponent } from './order/getNewOrder/new-order.component';
import { NewOrderDetailComponent } from './order/getNewOrderDetail/new-order-detail.component';
import { UncompleteOrderComponent } from './order/getInprogressOrder/uncomplete-order.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'new-order',
    loadChildren: () => import('./order/getNewOrder/new-order.module').then(m => m.NewOrderModule)
  },
  {
    path: 'new-order-detail',
    loadChildren: () => import('./order/getNewOrderDetail/new-order-detail.module').then(m => m.NewOrderDetailModule)
  },
  {
    path: 'uncomplete-order',
    loadChildren: () => import('./order/getInprogressOrder/uncomplete-order.module').then(m => m.UncompleteOrderModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
  {
    path: ROUTING.NEW_ORDER,
    component: NewOrderComponent
  },
  {
    path: ROUTING.NEWORDERDETAIL,
    component: NewOrderDetailComponent
  },
  {
    path: ROUTING.UNCOMPLETEORDER,
    component: UncompleteOrderComponent
  },
  {
    path: ROUTING.ORDER,
    component: OrderComponent
  },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

