import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/app/shared/endpoints';

@Injectable({
    providedIn: 'root'
})
export class ToDyehouseService {

    constructor(private http:HttpClient) { }
   
    data = [
        {
            order: "ürün1",
            orderNo: 1,
            color: "pembe"
           // itemStatu: 1
        },
        {
            order: "ürün2",
            orderNo: 1,
            color: "siyah"
            //itemStatu: 2
        },
        {
            order: "ürün3",
            orderNo: 1,
            color: "lacivert"
           // itemStatu: 1
        },
        {
            order: "ürün4",
            orderNo: 1,
            color: "sarı"
            //itemStatu: 1
        },

    ]
    getData() {
        return this.data;
    }
}