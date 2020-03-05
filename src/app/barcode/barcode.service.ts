import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from '../shared/endpoints';
import { Barcode } from './barcode';
import { AuthenticationService } from '../_services';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { User } from '../_models';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {
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
    return this.http.get<Barcode[]>(endpoints.ticket.getOrder.path, header).pipe(
      map((data:Barcode[])=>{
        return data;
      }),catchError(error=>{
        console.log('ERROR', error);
            return throwError(error);
      })
    );
  }
}
