import { Component, OnInit } from '@angular/core';
import { NeworderService } from './new-order.service';
import { NewOrder } from './new-order';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Router, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';
import { filter } from 'rxjs/operators';
import { TableFilterPipe } from '../table-filter/table-filter.pipe';
import { NeworderDetailService } from '../getNewOrderDetail/new-order-detail.service';
import { NewOrderDetail } from '../getNewOrderDetail/new-order-detail';


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
      custom: [{name:'Detay', title:'<i class="fa fa-eye"></i>'}],
      position:'right',
      filter:{
        type:'list',
        config:{
        }
      }

    },
    columns: {
      orderId: {
        type: "string",
        title: "Sipariş Id",
        filter: false
      },
      orderNo: {
        title: 'Sipariş No',
        type: 'number',
        filter: false
      },
      orderCreatedDate: {
        title: 'Oluşturulma Tarihi',
        filter: false,
        valuePrepareFunction: (orderCreatedDate) => {
          return this.datePipe.transform(new Date(orderCreatedDate), 'dd MM yyyy');
        }
      },
      customerInfo: {
        title: 'Cari Bilgisi',
        type: 'string',
        filter: false
      },
      orderStatu: {
        title: 'Sipariş Durumu',
        type: 'number',
        filter: false
      },
    },
  };
  newOrder: NewOrder[];
  constructor(private newOrderService: NeworderService,
    private datePipe: DatePipe,
    private route: Router,
    private newOrderDetail:NewOrderDetail) { }
    deneme:NewOrder[];

  ngOnInit() {
    this.getNewOrder();
  }
  getNewOrder() {
    this.newOrderService.getData().subscribe(o => {
      this.newOrder = o;
    });
  }
  customRoute(e) {
    console.log('onUserRowSelect', e);
    if(e.data.orderId === this.newOrderDetail.orderId )
    {
  
    }
  }
}