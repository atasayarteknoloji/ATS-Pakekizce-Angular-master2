import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {endpoints} from '../../app/shared/endpoints';
import {User} from '../../app/_models';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient,
    private router:Router,
    private authenticationService:AuthenticationService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  getRequestType():Observable<any[]>{
    const header ={
      headers: new HttpHeaders().set('Authorization', `Basic ${btoa(this.currentUserSubject.value.token)} `)
    };
    return this.http.get(endpoints.users.authenticate.path, header).pipe(map((data:Request[]) => {
      return data;
    }), catchError(error =>{
      this.authenticationService.logout();
      this.router.navigate(['/login']);
      return throwError('getRequestType hata!!');
    })
    );
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {

    return this.http.post<any>(endpoints.users.authenticate.path, {username, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
