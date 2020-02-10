import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewOrder } from './new-order';
import { endpoints } from 'src/app/shared/endpoints';

@Injectable({
  providedIn: 'root'
})
export class NeworderService {


  constructor(private http:HttpClient) { }
  
  getData() {
    return this.http.get<NewOrder[]>(endpoints.ticket.getOrder.path);
  }
}
