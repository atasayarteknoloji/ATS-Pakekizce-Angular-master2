import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewOrder } from '../model/new-order';
import { endpoints } from 'src/app/shared/endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeworderService {

  constructor(private http:HttpClient) { }
  
  getData() {
    return this.http.get<NewOrder[]>(endpoints.ticket.getNewOrder.path);
  }
  postData(statu:number):Observable<NewOrder[]>{
    return this.http.post<NewOrder[]>(endpoints.ticket.getNewOrder.path, JSON.stringify(statu));
  }
}
