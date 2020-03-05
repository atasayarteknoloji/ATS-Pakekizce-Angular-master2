import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from 'src/app/shared/endpoints';
import { Packaging } from '../order/model/packaging';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { User } from '../_models';
import { AuthenticationService } from '../_services';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PackagingService {
  public currentUser: Observable<User>;
  private currentUserSubject : BehaviorSubject<User>;
  constructor(private http:HttpClient,
    private router:Router,
    private authenticationService:AuthenticationService) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
     }
  
  getData() {
    const header ={
      headers: new HttpHeaders().set('Authorization', `Basic ${btoa(this.currentUserSubject.value.token)} `)
    };
    return this.http.get<Packaging[]>(endpoints.ticket.getBeforeClose.path, header).pipe(
      map((data:Packaging[])=>{
        return data;
      }),catchError(error=>{
        console.log('ERROR', error);
            return throwError(error);
      })
    );
  }
  updatePost(orderid: number, statusId: number){
    const header ={
        headers: new HttpHeaders().set('Authorization', `Basic ${btoa(this.currentUserSubject.value.token)} `)
      };
    return this.http.patch<Packaging[]>(endpoints.ticket.getOrder.path + '/putstatu/' + orderid, { id: orderid, statusId: statusId }, header).pipe(map((data:Packaging[]) => {
        return data;
      }));
}
}