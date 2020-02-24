import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/app/shared/endpoints';
import { ToDyehouse } from '../../order/model/to-dyehouse';

@Injectable({
    providedIn: 'root'
})
export class ToDyehouseService {

    constructor(private http:HttpClient) { }
   
    getData() {
        return this.http.get<ToDyehouse[]>(endpoints.ticket.getBeforeDyehouse.path);
    }
}