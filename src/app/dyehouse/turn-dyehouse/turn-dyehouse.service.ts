import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/app/shared/endpoints';
import { TurnDyehouse } from './turn-dyehouse';

@Injectable({
    providedIn: 'root'
})
export class TurnDyehouseService {

    constructor(private http:HttpClient) { }
   
    getData() {
        return this.http.get<TurnDyehouse[]>(endpoints.ticket.getOrder.path);
    }
}