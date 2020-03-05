import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from 'src/app/shared/endpoints';
import { UncomplateOrder } from '../model/uncomplate-order';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { User } from 'src/app/_models';
import { AuthenticationService } from 'src/app/_services';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UncomplateOrderService {
    public currentUser: Observable<User>;
    private currentUserSubject: BehaviorSubject<User>;

    constructor(private http: HttpClient,
        private router: Router,
        private authenticationService: AuthenticationService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    getData() {
        const header = {
            headers: new HttpHeaders().set('Authorization', `Basic ${btoa(this.currentUserSubject.value.token)} `)
        };
        return this.http.get<UncomplateOrder[]>(endpoints.ticket.getInProgressOrder.path).pipe(map((data: UncomplateOrder[]) => {
            return data;
        }),catchError(error=>{
            console.log('ERROR', error);
                return throwError(error);
          })
        );
    }
}
