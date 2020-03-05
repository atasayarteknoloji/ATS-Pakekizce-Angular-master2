import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from 'src/app/shared/endpoints';
import { ToDyehouse } from '../../order/model/to-dyehouse';
import { Order } from 'src/app/order/model/order';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { User } from 'src/app/_models';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';

@Injectable({
  providedIn: 'root'
})
export class ToDyehouseService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  constructor(private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  toDyehouse: ToDyehouse;
  getData() {
    const header = {
      headers: new HttpHeaders().set('Authorization', `Basic ${btoa(this.currentUserSubject.value.token)} `)
    };
    return this.http.get<ToDyehouse[]>(endpoints.ticket.getBeforeDyehouse.path).pipe(map((data: ToDyehouse[]) => {
      return data;
    }), catchError(error => {
      console.log('ERROR', error);
      return throwError(error);
    })
    );
  }

  updatePost(orderid: number, statusId: number) {
    const header = {
      headers: new HttpHeaders().set('Authorization', `Basic ${btoa(this.currentUserSubject.value.token)} `)
    };
    return this.http.patch<ToDyehouse[]>(endpoints.ticket.getOrder.path + '/putstatu/' + orderid, { id: orderid, statusId: statusId }, header).pipe(map((data: ToDyehouse[]) => {
      return data;
    }), catchError(error => {
      console.log('ERROR', error);
      return throwError(error);
    })
    );
  }
}