import { Component, OnInit } from '@angular/core';
import { UncompleteOrderService } from './uncomplete-order.service';
import { UncompleteOrder } from './uncomplete-order';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-uncomplete-order',
  templateUrl: './uncomplete-order.component.html',
  styleUrls: ['./uncomplete-order.component.sass'],
  providers:[DatePipe]
})
export class UncompleteOrderComponent implements OnInit {

  
  constructor(
    private uncompleteOrderService : UncompleteOrderService,
    private datePipe:DatePipe
  ) {}
  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false, // true,
      delete: false, // true,
      custom: false
    },
    columns: {
      orderNo: {
        title: 'Sipariş ID',
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
      orderProcessStartDate:{
        title:'İşleme Başlama Tarihi',
        filter:false,
        valuePrepareFunction: (orderProcessStartDate)=>{
          return this.datePipe.transform(new Date(orderProcessStartDate),'dd MM yyyy');
        }
      },
      currentInfo: {
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
  inprogressOrder:UncompleteOrder[]

  ngOnInit() {
    this.getInprogressOrder();
  }
  getInprogressOrder(){
    this.uncompleteOrderService.getData().subscribe(o=> {
      this.inprogressOrder=o;
    });
  }
  print(){
    window.print();
  }
}
