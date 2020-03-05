import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from 'src/app/shared/endpoints';
import { TurnDyehouse } from '../../order/model/turn-dyehouse';
import { catchError, map } from 'rxjs/operators';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { User } from 'src/app/_models';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';

@Injectable({
    providedIn: 'root'
})
export class TurnDyehouseService {
    public currentUser: Observable<User>;
    private currentUserSubject: BehaviorSubject<User>;
    constructor(private http: HttpClient,
        private router: Router,
        private authenticationService: AuthenticationService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
   
    getData() {
        const header ={
            headers: new HttpHeaders().set('Authorization', `Basic ${btoa(this.currentUserSubject.value.token)} `)
          };
        return this.http.get<TurnDyehouse[]>(endpoints.ticket.getAfterDyehouse.path, header).pipe(map((data:TurnDyehouse[]) => {
            return data;
          }), catchError(error=>{
            console.log('ERROR', error);
                return throwError(error);
          })
          );
    }
    updatePost(orderid: number, statusId: number){
        const header ={
            headers: new HttpHeaders().set('Authorization', `Basic ${btoa(this.currentUserSubject.value.token)} `)
          };
        return this.http.patch<TurnDyehouse[]>(endpoints.ticket.getOrder.path + '/putstatu/' + orderid, { id: orderid, statusId: statusId }, header).pipe(map((data:TurnDyehouse[]) => {
            return data;
          }));
    }
}