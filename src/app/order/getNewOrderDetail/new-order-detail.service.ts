import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewOrderDetail } from './new-order-detail';
import { endpoints } from 'src/app/shared/endpoints';

@Injectable({
    providedIn: 'root'
})
export class NeworderDetailService {

    constructor(private http:HttpClient) { }
   
    data = [
        {
            itemId: 1,
            itemName: "ürün1",
            lineType: "kalemtipi1",
            isThereBarcode: true,
            itemStatu: 1
        },
        {
            itemId: 2,
            itemName: "ürün2",
            lineType: "kalemtipi2",
            isThereBarcode: false,
            itemStatu: 1
        },
        {
            itemId: 3,
            itemName: "ürün3",
            lineType: "kalemtipi3",
            isThereBarcode: true,
            itemStatu: 1
        },
        {
            itemId: 4,
            itemName: "ürün4",
            lineType: "kalemtipi4",
            isThereBarcode: true,
            itemStatu: 1
        },

    ]
    getData() {
        return this.http.get<NewOrderDetail[]>(endpoints.ticket.getNewOrderDetail.path);
    }
}