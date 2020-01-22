import { Component, OnInit } from '@angular/core';
import { UncomplateOrderService } from './uncomplate-order.service';
import { UncomplateOrder } from './uncomplate-order';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-uncomplate-order',
  templateUrl: './uncomplate-order.component.html',
  styleUrls: ['./uncomplate-order.component.sass'],
  providers:[DatePipe]
})
export class UncomplateOrderComponent implements OnInit {

  
  constructor(
    private uncomplateOrderService : UncomplateOrderService,
    private datePipe:DatePipe
  ) {}
  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false, // true,
      delete: false, // true,
      custom: [{name:'Detay', title:'<i class="fa fa-eye"></i>'}],
      position:'right',
      filter:{
        type:'completer',
        config:{
        }
      }
    },
    columns: {
      orderId:{
        title:'Sipariş Id',
        type:'string',
        filter:false
      },
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
  inprogressOrder:UncomplateOrder[]

  ngOnInit() {
    this.getInprogressOrder();
  }
  getInprogressOrder(){
    this.uncomplateOrderService.getData().subscribe(o=> {
      this.inprogressOrder=o;
    });
  }
  customRoute(e) {
    console.log('onUserRowSelect', e);
  }
}
