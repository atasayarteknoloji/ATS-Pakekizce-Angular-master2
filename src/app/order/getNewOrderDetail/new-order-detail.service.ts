import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewOrderDetail } from './new-order-detail';
import { endpoints } from 'src/app/shared/endpoints';

@Injectable({
    providedIn: 'root'
})
export class NeworderDetailService {

    constructor(private http:HttpClient) { }
   
    getData() {
        return this.http.get<NewOrderDetail[]>(endpoints.ticket.getOrder.path);
    }
}