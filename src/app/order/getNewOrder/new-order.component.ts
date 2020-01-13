import { Component, OnInit } from '@angular/core';
import { NeworderService } from './new-order.service';
import { NewOrder } from './new-order';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {Router,Routes} from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: [],
  providers: [DatePipe]
})
export class NewOrderComponent implements OnInit {
  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false, // true,
      delete: false, // true,
      custom: true
    },
    columns: {
      orderNo: {
        title: 'Sipariş No',
        type: 'number',
        filter:false
      },
      orderCreatedDate: {
        title: 'Oluşturulma Tarihi',
        filter:false,
        valuePrepareFunction: (orderCreatedDate)=>{
          return this.datePipe.transform(new Date(orderCreatedDate),'dd MM yyyy');
        }
      },
      customerInfo: {
        title: 'Cari Bilgisi',
        type: 'string',
        filter:false
      },
      orderStatu: {
        title: 'Sipariş Durumu',
        type: 'number',
        filter:false
      },
    },
  };
  newOrder:NewOrder[];
  constructor( private newOrderService: NeworderService,
    private datePipe:DatePipe,
    private route:Router) {}
  isShow=true;
  ngOnInit() {
    this.getNewOrder();
  }
  getNewOrder(){
    this.newOrderService.getData().subscribe(o=> {
      this.newOrder=o;
    });
  }
  onUserRowSelect(e) {
    console.log('onUserRowSelect', e);
    }
}