import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/app/shared/endpoints';
import { ComplatedOrder } from './complated-order';

@Injectable({
  providedIn: 'root'
})
export class ComplatedOrderService {


  constructor(private http:HttpClient) { }
  
  getData() {
    return this.http.get<ComplatedOrder[]>(endpoints.ticket.getOrder.path);
  }
}
