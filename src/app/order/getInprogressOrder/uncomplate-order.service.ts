import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {endpoints} from 'src/app/shared/endpoints';
import { UncomplateOrder } from '../model/uncomplate-order';


@Injectable({
    providedIn: 'root'
})
export class UncomplateOrderService {


    constructor(private http:HttpClient) { }
    getData() {
        return this.http.get<UncomplateOrder[]>(endpoints.ticket.getInProgressOrder.path);
    }
}
