import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {AdminComponent} from './admin';
import {LoginComponent} from './login';
import {AuthGuard} from './_helpers';
import {Role} from './_models';
import {NgModule} from '@angular/core';
import {ROUTING} from './shared/routing';
import { OrderComponent } from './order/order.component';
import {ToDyehouseComponent} from './dyehouse/to-dyehouse/to-dyehouse.component';
import { TurnDyehouseComponent } from './dyehouse/turn-dyehouse/turn-dyehouse.component';
import { PackagingComponent } from './packaging/packaging.component';

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
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'to-dyehouse',
    loadChildren: () => import('./dyehouse/to-dyehouse/to-dyehouse.module').then(m => m.ToDyehouseModule)
  },
  {
    path: 'turn-dyehouse',
    loadChildren: () => import('./dyehouse/turn-dyehouse/turn-dyehouse.module').then(m => m.TurnDyehouseModule)
  },
  {
    path: 'packaging',
    loadChildren: () => import('./packaging/packaging.module').then(m => m.PackagingModule)
  },
  {
    path: ROUTING.ORDER,
    component: OrderComponent
  },
  {
    path: ROUTING.TODYEHOUSE,
    component: ToDyehouseComponent
  },
  {
    path: ROUTING.TURNDYEHOUSE,
    component: TurnDyehouseComponent
  },
  {
    path: ROUTING.PACKAGING,
    component: PackagingComponent
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

